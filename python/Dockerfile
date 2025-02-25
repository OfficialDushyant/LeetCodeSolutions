# python/Dockerfile
FROM python:3.8

WORKDIR /usr/src/app

# Upgrade pip and install Pipenv and pylint
RUN pip install --upgrade pip pipenv pylint autopep8 coverage colorama

# Use Pipenv if a Pipfile exists, otherwise use requirements.txt if available.
CMD ["bash", "-c", "if [ -f Pipfile ]; then pipenv install; elif [ -f requirements.txt ]; then pip install --no-cache-dir -r requirements.txt; fi && tail -f /dev/null"]