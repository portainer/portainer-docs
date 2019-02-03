==========
Contribute
==========

Use the following instructions and guidelines to contribute to the Portainer project.

Build Portainer locally
=======================

Requirements
------------

Ensure you have `Docker <https://docs.docker.com/engine/installation/>`_, `Node.js <https://nodejs.org/en/>`_ >= 6, and `yarn <https://yarnpkg.com>`_.

Build
-----

Checkout the project and go inside the root directory:

.. code-block:: bash

  $ git clone https://github.com/portainer/portainer.git
  $ cd portainer

Install dependencies with yarn:

.. code-block:: bash

  $ yarn

Build the app locally:

.. code-block:: bash

  $ yarn build

Start a watched build process:

.. code-block:: bash

  $ yarn start

Access Portainer at `http://localhost:9000 <http://localhost:9000>`_

.. TIP::
   The frontend application will be updated when you save your changes to any of the sources (:file:`app/**/*.js`, :file:`assets/css/app.css` or :file:`index.html`). Just refresh the browser.


Contribution guidelines
=======================

Please follow the contribution guidelines on `the repository <https://github.com/portainer/portainer/blob/develop/CONTRIBUTING.md>`_.


Contributing to the documentation
=================================

Checkout the project and go inside the root directory:

.. code-block:: bash

  $ git clone https://github.com/portainer/portainer-docs.git
  $ cd portainer-docs


Update the documentation and trigger a local build:

.. code-block:: bash

  $ docker run --rm -v ${PWD}/docs:/src portainer/docbuilder:latest make html

This will create a local folder :file:`docs/build/html` where you will find the generated static files for the documentation.
