from rest_framework import authentication
from users.models import Daily_score, Score
from .serializers import Daily_scoreSerializer, ScoreSerializer
from rest_framework import viewsets


class Daily_scoreViewSet(viewsets.ModelViewSet):
    serializer_class = Daily_scoreSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Daily_score.objects.all()


class ScoreViewSet(viewsets.ModelViewSet):
    serializer_class = ScoreSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Score.objects.all()
