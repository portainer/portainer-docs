==========
Contribute
==========

To contribute to the Portainer project, checkout the `GitHub repository <https://github.com/portainer/portainer>`_ and go inside the root directory:

.. code-block:: bash

  $ git clone https://github.com/portainer/portainer.git
  $ cd portainer

Then, use the following instructions and guidelines.

.. WARNING:: `#938 <https://github.com/portainer/portainer/pull/938>`_ (merged 2017/00/00) was a major rewrite of the build system, which introduced a platform agnostic and portable two-step build framework based on `Docker <https://docs.docker.com/engine/installation/>`_ containers. If you are working on an older commit/branch, either rebase or follow `Build Portainer (pre938)`_.

Requirements
============

Ensure you have `Docker <https://docs.docker.com/engine/installation/>`_ installed locally.

.. IMPORTANT:: If in a GNU/Linux box, you should either follow post-installation steps in order to `manage Docker as a non-root user <https://docs.docker.com/engine/installation/linux/linux-postinstall/#manage-docker-as-a-non-root-user>`_ or run the scripts with sudo privileges.

.. IMPORTANT:: If in a Windows box, you will need a unix shell. The provided scripts are tested with MSYS2 (MinGW-w64), but any other such as Cygwin or Git for Windows should work.

Build Portainer
===============

Additional requirements
-----------------------

Either pull the following Docker images or follow `Build Factory`_:

.. code-block:: bash

  $ docker pull portainer/factory
  $ docker pull portainer/builder
  $ docker pull portainer/base

.. HINT:: This is a portable build framework, i.e., once you get the images above the following steps can be run offline.

Watch
-----

Run ``factory_create.sh`` from the root of the repo with arg ``"grunt run-dev"``:

.. code-block:: bash

  $ ./build/factory_run.sh "grunt run-dev"

Both the frontend and the backend are built and a container is run. Browse `localhost:9001 <http://localhost:9001>`_ to try it.

The shell waits for modifications to either of the following:

- Frontend:
   - ``app/``
      - ``**/*.js``
      - ``**/*.spec.js``
      - ``components/**/*.html``
      - ``directives/**/*.html``
   - ``assets/css/app.css``
   - ``index.html``
- Backend:
   - ``api/**/*.go``

The actions to be taken when a file is modified depend on the group it belongs to:

- Frontend: the app is built and files inside the running container are synced.
- Backend: the executable static binary is built, the container is removed, files are synced and the container is started again. Note that the ``/data`` volume is not removed when the container is recreated.

.. HINT:: When you exit the watch process (``Ctrl + C``) the development container is left on the host. Remove it with ``docker rm -f portainer-dev``.

Release
-------

Set envvar ``ARTIFACTS`` to the path where you want tarballs to be saved and run ``factory_run.sh`` from the root of the repo with args ``"v<VERSION>" <PLATFORM>-<ARCH>``:

.. code-block:: bash

  $ ARTIFACTS='./artifacts' ./build/factory_run.sh "v0.0.0" linux:amd64

Both the frontend and the backend are built and the products are packed in a tarball. Then, a docker image based on ``portainer/base`` is built. The tarball is copied to the provided path and the image is available on the host.

.. HINT:: To build release artifacts for all available platforms and architectures use ``"all"`` instead of ``<PLATFORM>-<ARCH>``.

Custom
------

As long as the first character of the first argument to ``factory_run.sh`` is not ``v``, each argument is taken as a command and run inside the factory container. For example:

.. code-block:: bash

  $ ./build/factory_run.sh "grunt lint"

Indeed, ``grunt run-dev`` is handled as a custom command.

Furthermore, grunt can be run locally (i.e. without ``portainer/factory``) with ``WORKDIR='' grunt``. However, note that some tasks in the gruntfile expect sources to be available in a named docker volume, which cannot be bind to a path on the host.

See `Build-system internals`_ for further details.

Build Factory
=============

Additional requirements
-----------------------

- ``golang:alpine`` is used to get golang dependencies: ``$ docker pull golang:alpine``
- `dos2unix <https://sourceforge.net/projects/dos2unix/>`_ is used to ensure that format copied to GNU/Linux containers are properly formatted. Either install it or fake it with a symbolic link.

Create
------

Run ``factory_create.sh`` from the root of the repo:

.. code-block:: bash

   $ ./build/factory_create.sh

It will build ``portainer/factory`` and ``portainer/builder``.


Build-system internals
======================

All the shell scripts related to the build system can be explored at subdir `build <https://github.com/portainer/portainer/tree/develop/build>`_.

Color
-----

``ansi_color.sh``

- Provides ANSI color codes to get pretty stdout.
- If available, it is sourced by ``factory_create.sh``, ``factory_run.sh``, ``bootstrap.sh`` and ``build.sh``.

Factory scripts
---------------

``factory_create.sh``:

- ``builder.sh`` is run in a ``golang:alpine`` container in order to get golang dependencies.
- ``portainer/factory`` is built with ``Dockerfile``:
   - ``bootstrap.sh`` and ``ansi_color.sh`` are copied.
   - ``Godeps`` and ``vendor`` are copied to ``/portainer-deps``.
   - ``npm install`` and ``bower install`` are run and dependencies are copied to ``/portainer-deps``.
- ``portainer/builder`` is built, which is based on ``golang:alpine`` and only adds ``git`` and ``upx``.

``factory_run.sh``:

- A ``portainer/factory`` container is run, i.e. it is bootstraped and the local ``build/build.sh`` script is run with the provided arguments.

``factory_deploy.sh``:

- Previously built docker images are pushed to the hub.
- Login and logout commands are included.

Factory image
-------------

``Dockerfile``:

- Build procedure for ``portainer/factory``.

``bootstrap.sh``:

- Entrypoint of ``portainer/factory``.
- ``Godeps`` and ``vendor`` are copied from ``/portainer-deps`` to ``/src-volume`` (which is bind to a docker volume named ``portainer-src-volume``).
- ``node_modules`` and ``bower_components`` are linked symbolically from ``/portainer-deps`` to the work dir (``/portainer-build``, defined in ``Dockerfile``).
- golang sources are copied from the local path (which must be bind to ``WORKDIR=/work/`` in the container) to ``/src-volume``.
- ``gruntfile`` is copied from the local path to the work dir.
- All the files in the local path are converted with ``dos2unix``.
- ``build/build.sh`` in the local path is executed.

``build.sh``:

- This is not copied inside any container, but run directly from a local path bind to a ``portainer/factory`` container.
- If the first character of the first arg is ``v``:
   - ``grunt frontend:release`` is executed.
   - ``build_releases "$releases"``, where ``$release`` is composed of all the args but the first one.
   - ``build_releases()``, for each arg of type ``<platform>-<arch>``, builds the backend, packs the tarball and builds a ``portainer/portainer:<platform>-<arch>`` image, which is also tagged with the version.
- For any other arg, ``build.sh`` treats them as commands and are sequentlly executed. Note that ``build_archive()``, ``build_image()`` and ``build_releases()`` are available.

Builder image
-------------

``build_in_container.sh``:

- ``builder.sh`` is executed in a ``portainer/builder`` container to build the executable binary for a given ``<platform>-<arch>``. Note that sources must be available in a docker volume named ``portainer-src-volume`` (see ``bootstrap.sh`` above).

``builder.sh``:

- The package located at ``$mainPath/$mainPackagePath`` is built for ``BUILD_GOOS`` and ``BUILD_GOARCH``.
- If ``$pkgPath/Godeps/_workspace`` or ``$pkgPath/vendor`` exist, no dependencies are downloaded with get.
- If ``COMPRESS_BINARY=true`` the binary is comppressed with ``upx``.
- If ``DEPSONLY=true``, instead of building the package, dependencies are downloaded with ``godep``.

``build/linux/Dockerfile``:

- Build procedure for ``portainer/portainer``.

.. IMPORTANT:: A developer might run full custom commands inside the ``portainer/factory`` container by modifying the local ``build/build.sh`` script prior to executing ``factory_run.sh``. Note that these are run after ``bootstrap.sh``, which moves dependencies to predefined locations and named volumes.

Build Portainer (pre938)
========================

.. IMPORTANT:: Ensure you have `Docker <https://docs.docker.com/engine/installation/>`_, `Node.js <https://nodejs.org/en/>`_ >= 0.8.4 and `npm <https://www.npmjs.com/>`_ installed locally.

Install the dependencies using ``npm`` from the root of the repo:

.. code-block:: bash

  $ npm install -g bower && npm install

.. IMPORTANT::

   Ensure that a folder named ``bower_components`` is created in the root directory, if not run the following command:

   .. code-block:: bash

     $ bower install --allow-root

.. IMPORTANT::
   Note for CentOS users, you'll need to create a symlink to the ``shasum`` binary:
   
   .. code-block:: bash

      $ ln -s /usr/bin/sha1sum /usr/bin/shasum

Run any of the following commands:

- ``$ grunt build`` : Build the app locally.
- ``$ grunt run-dev`` : Start a live-reload process, the local application will be updated when you save your changes. Access Portainer at `http://localhost:9000 <http://localhost:9000>`_.
- ``$ grunt lint`` : Do not forget to `lint <http://www.javascriptlint.com/>`_ your code.

Contribution guidelines
=======================

Please follow the contribution guidelines on `the repository <https://github.com/portainer/portainer/blob/develop/CONTRIBUTING.md>`_.
