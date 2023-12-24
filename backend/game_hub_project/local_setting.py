# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-59h*=_qc00tb#5d_z*b^jfhsz=cspkzixs*ve#6#zs=3jr7dp$'

# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'game_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'password'
    }
}