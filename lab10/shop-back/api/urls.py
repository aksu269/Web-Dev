from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import *

# router = DefaultRouter()
# router.register('categories', CategoryViewSet)
# router.register('products', ProductViewSet)

urlpatterns = [
    # path('', include(router.urls)),
    # path('products/', product_list),
    # path('products/<int:product_id>/', product_detail),
    # path('products/', ProductListAPIView.as_view()),
    # path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
]