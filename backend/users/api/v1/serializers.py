from rest_framework import serializers
from users.models import Daily_score, Score


class Daily_scoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Daily_score
        fields = "__all__"


class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = "__all__"
