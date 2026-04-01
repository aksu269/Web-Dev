from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from ..models import Product, Category
from rest_framework import viewsets
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from ..serializers import ProductSerializer, CategorySerializer
# Create your views here.

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
def product_detail(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse(product.to_json(), safe=False)
def category_list(request):
    categories = Category.objects.all()
    data = [{"id": c.id, "name": c.name} for c in categories]
    return JsonResponse(data, safe=False)
def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {"id": category.id, "name": category.name}
    return JsonResponse(data, safe=False)
def products_by_category(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.products.all()
    data = [p.to_json() for p in products]
    return JsonResponse(data, safe=False, json_dumps_params={'indent': 2})

@api_view(['GET', 'POST'])
class categoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object() # Получаем категорию по ID
        products = Product.objects.filter(category=category) # Фильтруем продукты
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
class productViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer