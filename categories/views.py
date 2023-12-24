from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CategorySerializer
from .models import Category

@api_view(['GET'])
def categories_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)