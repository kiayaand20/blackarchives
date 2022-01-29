from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('refresh-token/', TokenRefreshView.as_view(),
         name='token_refresh'),
    path('user/login/', TokenObtainPairView.as_view()),
    path('user/signup/', views.RegisterUsersView.as_view()),
]
