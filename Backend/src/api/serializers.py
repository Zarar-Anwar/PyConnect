from rest_framework import serializers
from ..services.doctors.models import (
    ProfileDataSection, Doctor, Fee, License, MainClinicProfile,
    ClinicHighlight, BookingGuideVideo, VlogPost, Testimonial,TeamMember
)

from ..core.models import ContactMessage,Application

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'

class ProfileDataSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileDataSection
        fields = '__all__'

class LicenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = License
        fields = '__all__'

class FeeSerializer(serializers.ModelSerializer):
    doctor = serializers.SerializerMethodField()

    class Meta:
        model = Fee
        fields = '__all__'

    def get_doctor(self, obj):
        return DoctorSerializer(obj.doctor).data

class DoctorSerializer(serializers.ModelSerializer):
    licenses = LicenseSerializer(many=True, read_only=True)
    fee = FeeSerializer(read_only=True)

    class Meta:
        model = Doctor
        fields = '__all__'

class MainClinicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainClinicProfile
        fields = '__all__'

class ClinicHighlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClinicHighlight
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


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'