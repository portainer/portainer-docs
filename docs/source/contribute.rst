==========
Contribute
==========

Use the following instructions and guidelines to contribute to the Portainer project.

Build Portainer locally
=======================

Requirements
------------

Ensure you have `Docker <https://docs.docker.com/engine/installation/>`_, `Node.js <https://nodejs.org/en/>`_ >= 0.8.4 and `npm <https://www.npmjs.com/>`_ installed locally.
Create an account in `Docker's registry <https://cloud.docker.com/>`_ (if you don't have it yet) and log in using "docker login" command.

Build
-----

Checkout the project and go inside the root directory:

.. code-block:: bash

  $ git clone https://github.com/portainer/portainer.git
  $ cd portainer

Install the dependencies using ``npm``:

.. code-block:: bash

  $ npm install -g bower && npm install

Ensure that a folder named `bower_components` is created in the root directory, if not run the following command:

.. code-block:: bash

  $ bower install --allow-root

Note for CentOS users, you'll need to create a symlink to the ``shasum`` binary:

.. code-block:: bash

  $ ln -s /usr/bin/sha1sum /usr/bin/shasum


Build the app locally:

.. code-block:: bash

  $ grunt build


Start a live-reload process, the local application will be updated when you save your changes:

.. code-block:: bash

  $ grunt run-dev

Access Portainer at `http://localhost:9000 <http://localhost:9000>`_

Do not forget to `lint <http://www.javascriptlint.com/>`_ your code:

.. code-block:: bash

  $ grunt lint

Contribution guidelines
=======================

Please follow the contribution guidelines on `the repository <https://github.com/portainer/portainer/blob/develop/CONTRIBUTING.md>`_.
