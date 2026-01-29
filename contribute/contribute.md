---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/udjBY77rL45c6FTs07xf/contribute/contribute
---

# Contribute

We value contributions from the Portainer community and encourage developers to propose fixes, improvements, and new ideas.&#x20;

The following guidelines outline our engineering workflows, please review these before making a contribution to ensure any changes can be integrated smoothly.&#x20;

## Contributing to the Portainer CE codebase

The Portainer CE codebase is available in [GitHub](https://github.com/portainer/portainer). Please follow our [build instructions](build/) and the following guidelines when making a contribution.

### Repository structure

* Our main development occurs in private repositories, which are mirrored to public GitHub repos (e.g. [portainer/portainer](https://github.com/portainer/portainer/)).
* The `develop` and `release/*` branches in public repositories are **read-only**: merges into these branches are blocked to preserve synchronization with our internal repositories.
* We maintain a separate `community` branch in each public repository to accept and review external contributions.

### Contribution process

1. **Fork the repository**
   * Create your own fork of the relevant Portainer public repository.
2. **Create a feature branch**
   * Base your changes on the current `develop` branch (not `main`, `release/*`, or `community`). This ensures you are working off the latest version of the codebase.
3. **Submit a Pull Request (PR)**
   * Open your PR against the `develop` branch.
   * Portainer engineers will update the target branch to `community` when the contribution is ready to be merged.
4. **Review and feedback**
   * Contributions will be reviewed by Portainer engineers.
   * We may request changes to align with coding standards, tests, or design decisions.
   * In some cases, we may adapt or refactor a contribution before merging.
5. **Integration**
   * Once approved and merged into `community`, Portainer engineers will cherry-pick contributions into the upstream private repository.
   * These changes will then flow into `develop` and subsequent releases through our normal sync process.
   * Not all contributions will be integrated upstream. Decisions will be based on roadmap alignment, technical fit, and quality.

### Contribution expectations

* **Coding standards**: Please follow existing project style and conventions.
* **Tests**: Include tests where applicable. Contributions without tests may be delayed.
* **Documentation**: Update relevant docs (e.g. README, usage notes) when changing functionality.
* **Scope**: Focus on well-defined features, fixes, or improvements. Large architectural changes should be discussed in an issue first.

{% hint style="warning" %}
### AI assistance notice <a href="#id-987d7792-f717-4a29-9fe7-b9014d343629" id="id-987d7792-f717-4a29-9fe7-b9014d343629"></a>

If you use any form of AI assistance to create your contribution - whether for code, documentation, or drafting pull request (PR) responses - it must be disclosed in your pull request description.

Trivial assistance, like single-word auto-completion, does not require disclosure. Disclosing AI usage helps maintainers apply the correct level of scrutiny during review.

For commits where an AI tool has significantly contributed to the code, it is recommended to add a Co-Authored-By trailer in the commit message to formally credit the tool, using the format specified by the tool's provider.
{% endhint %}

### Communication

* For significant changes or new features, use [GitHub Discussions](https://github.com/orgs/portainer/discussions/categories/ideas) to start a discussion before starting the change.
* PR discussions are the best place for clarifications on specific contributions.

## Reporting bugs

If you find a bug, [please tell us](https://github.com/portainer/portainer/issues/new?assignees=\&labels=bug%2Fneed-confirmation%2C+kind%2Fbug\&template=Bug_report.md\&title=) so we can triage it. All bugs are managed in the [GitHub issues repo](https://github.com/portainer/portainer/issues). When you click through, our template makes it easy to record all of the details. Check the list of [open bugs](https://github.com/portainer/portainer/labels/kind%2Fbug) before reporting to avoid duplicates.

[This article](../faqs/contributing/how-do-you-decide-which-bugs-and-features-to-work-on-first.md) covers how we prioritize bug fixes.

## Feature requests

You can request new features by posting an Idea in our [GitHub Discussions](https://github.com/orgs/portainer/discussions/categories/ideas) forum. Please check to see if someone has already requested the feature you want, and give it an upvote if so.

Learn how we prioritize feature development [in this article](../faqs/contributing/how-do-you-decide-which-bugs-and-features-to-work-on-first.md).
