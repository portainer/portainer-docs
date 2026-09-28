# What's new in version 3.0

Portainer version 3.0 includes a number of new features, fixes and updates. For a full list of changes, please refer to our [release notes](https://app.gitbook.com/o/-MgDK9ndL1-o2MHHFiXo/s/6IKMiLNKQEbVchxatvbm/release-notes).

### Short Term Support (STS) <a href="#short-term-support-sts" id="short-term-support-sts"></a>

3.0 is a Short Term Support, or "STS", release of Portainer. STS releases intended to be an introduction of new features and functionality in Portainer, and while we do perform significant testing prior to release are not recommended for production use. For production, we recommend staying with the Long Term Support (LTS) releases. The features that appear in STS releases will, once refined and stable, be implemented in the next LTS release.You can read more about our release principles in our [lifecycle policy](https://docs.portainer.io/sts/start/lifecycle).

## New in this release <a href="#new-in-this-release" id="new-in-this-release"></a>

### A new major version

Portainer 3.0 marks our move to a Kubernetes-first codebase, that brings a new family of purpose-built consoles designed around how teams actually work.\
If you're running Docker today, don't panic - nothing changes on 2.x, and we lay out exactly what your options are going forward  ([D2K](https://github.com/portainer/d2k), [KubeSolo](https://kubesolo.io/), migrating to native Kubernetes, or just staying put).\
Full details can be found in [this blog post](https://portainer.io/blog/portainer-3-0-is-coming).

### Vulnerability scanning

Attach a [vulnerability scanning policy](admin/environments/policies/kubernetes-policies/create-a-kubernetes-vulnerability-scanning-policy.md) to a Kubernetes environment group and Portainer deploys and configures trivy-operator to scan running workloads on a schedule you control. Review findings - severity, CVEs, and available fixes - in the new [Image Vulnerabilities](user/kubernetes/more-resources/image-vulnerabilities.md) view, and pair it with an [alert rule](user/alerting/) to get notified when critical or high severity issues turn up.

<figure><img src=".gitbook/assets/3.0-image-vulnerabilities-1.png" alt=""><figcaption></figcaption></figure>

<figure><img src=".gitbook/assets/3.0-image-vulnerabilities-2.png" alt="" width="374"><figcaption></figcaption></figure>

