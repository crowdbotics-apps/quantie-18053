from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import Daily_scoreViewSet, ScoreViewSet

router = DefaultRouter()
router.register("daily_score", Daily_scoreViewSet)
router.register("score", ScoreViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
