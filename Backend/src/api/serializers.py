from rest_framework import serializers
from ..services.doctors.models import (
    ProfileDataSection, Doctor, Fee, License, MainClinicProfile,
    ClinicHighlight, BookingGuideVideo, VlogPost, Testimonial, TeamMember
)
from ..core.models import ContactMessage, Application


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'


class ProfileDataSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileDataSection
        fields = '__all__'



class LicenseSerializer(serializers.ModelSerializer):
    doctor = serializers.PrimaryKeyRelatedField(queryset=Doctor.objects.all()) 

    class Meta:
        model = License
        fields = '__all__'



class FeeSerializer(serializers.ModelSerializer):
    doctor = serializers.PrimaryKeyRelatedField(queryset=Doctor.objects.all()) 

    class Meta:
        model = Fee
        fields = '__all__'


class DoctorSerializer(serializers.ModelSerializer):
    clinic = serializers.PrimaryKeyRelatedField(queryset=ClinicHighlight.objects.all())
    fee = FeeSerializer(read_only=True)  # One-to-one
    licenses = LicenseSerializer(many=True, read_only=True)  # One-to-many

    class Meta:
        model = Doctor
        fields = '__all__'




class ClinicHighlightSerializer(serializers.ModelSerializer):
    # Assuming that ClinicHighlight has a relationship to Doctor and we want to serialize related doctors
    doctors = DoctorSerializer(many=True, read_only=True)

    class Meta:
        model = ClinicHighlight
        fields = '__all__'



class MainClinicProfileSerializer(serializers.ModelSerializer):
    clinic = ClinicHighlightSerializer(read_only=True)
    doctor = DoctorSerializer(read_only=True)

    class Meta:
        model = MainClinicProfile
        fields = '__all__'


class BookingGuideVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingGuideVideo
        fields = '__all__'


class VlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = VlogPost
        fields = '__all__'


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'
