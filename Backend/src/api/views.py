from rest_framework import generics
from rest_framework.permissions import AllowAny  # Add this import

from ..services.doctors.models import (
    ProfileDataSection, Doctor, Fee, License, MainClinicProfile,
    ClinicHighlight, BookingGuideVideo, VlogPost, Testimonial,TeamMember
)

from ..core.models import (
    ContactMessage,Application
)

from rest_framework.views import APIView

from .serializers import (
    ProfileDataSectionSerializer, DoctorSerializer, FeeSerializer, LicenseSerializer,
    MainClinicProfileSerializer, ClinicHighlightSerializer,ApplicationSerializer,
    BookingGuideVideoSerializer, VlogPostSerializer, TestimonialSerializer,ContactMessageSerializer,TeamMemberSerializer
)
from rest_framework.response import Response
from django.views.generic.edit import CreateView


class ApplicationRetrieveView(APIView):
    def get(self, request):
        app_instance = Application.objects.first()
        serializer = ApplicationSerializer(app_instance)
        return Response(serializer.data)

class ContactMessageCreateAPIView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


class ProfileDataSectionListView(generics.ListAPIView):

    def get(self, request):
        data = ProfileDataSection.objects.order_by('-created_at').first()
        serializer = ProfileDataSectionSerializer(data)
        return Response(serializer.data)

class DoctorListView(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer


class MainClinicProfileListView(generics.ListAPIView):

    def get(self, request):
        data = MainClinicProfile.objects.order_by('-created_at').first()
        serializer = MainClinicProfileSerializer(data)
        return Response(serializer.data)


class ClinicHighlightListView(generics.ListAPIView):

    def get(self, request):
        data = ClinicHighlight.objects.all()
        serializer = ClinicHighlightSerializer(data, many=True)
        return Response(serializer.data)



class BookingGuideVideoListView(generics.ListAPIView):
    def get(self, request):
        data = BookingGuideVideo.objects.order_by('-created_at').first()
        serializer = BookingGuideVideoSerializer(data)
        return Response(serializer.data)


class VlogPostListView(generics.ListAPIView):
    def get(self, request):
        data = VlogPost.objects.all()
        serializer = VlogPostSerializer(data, many=True)
        return Response(serializer.data)


class TestimonialListView(generics.ListAPIView):

    def get(self, request):
        data = Testimonial.objects.all()
        serializer = TestimonialSerializer(data, many=True)
        return Response(serializer.data)


class TeamMemberListView(generics.ListAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer