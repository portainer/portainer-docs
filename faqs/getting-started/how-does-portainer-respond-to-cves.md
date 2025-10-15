---
description: In this article we'll talk about CVEs and how we respond to them at Portainer.
---

# How does Portainer respond to CVEs?

The crucial points are:\


* CVEs are reports of vulnerabilities in software.
* CVEs are given a score (between 0.0 and 10.0) based on a number of criteria.
* The CVSS score shouldn't be considered alone - the elements that made up the score are important.
* CVEs can be opened against any piece of software.
* Portainer takes CVEs reported against our product very seriously.
* For CVEs with a score above 7.0 (High and Critical vulnerabilities) we aim to provide a patched version of Portainer within 12 weeks.
* Many reported CVEs in Portainer are actually in third-party binaries, which can slow down fix timeframes.
* Some CVEs are submitted without enough information, and we can (and have) mark these as disputed.

Below we'll go into more detail on each of the above points.\


#### What is a CVE?

CVE (Common Vulnerabilities and Exposures) identifiers, commonly referred to as just "CVEs", are reports of vulnerabilities or data exposures in a software product. They are presented in a standardized format which outlines the severity, impact, and exploitability of the issue. Each CVE that is identified is assigned a number - for example, `CVE-2024-1234` - and logged in public databases such as [MITRE](https://cve.mitre.org/). CVEs provide a public mechanism for identifying and cataloguing vulnerabilities in software, with the intent of encouraging quick and accurate resolution of the underlying issue.

Along with their identifying number, CVEs are given a CVSS (Common Vulnerability Scoring System) value which looks something like this:

```
CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:N/SC:N/SI:N/SA:N
```

This system lets you identify the severity of the vulnerability based on a number of criteria including the vector, complexity and requirements of the attack needed to exploit the vulnerability, as well as the impact on the vulnerable system as well as subsequent impacted systems. All these values combine in an algorithm to provide a score between 0.0 and 10.0, with 10.0 being the most severe.

While the resulting score is useful for at-a-glance identification of how bad a CVE is, it is important to look at the elements that make up the score and how they apply to your usage of the software. For example, if the attack vector for a CVE is physical-only, this might reduce the severity in your eyes if physical access to your devices running the software is tightly controlled.

For you to be affected by a CVE, you will of course need to be running the software that the CVE refers to. With modern computing, you could be running thousands of pieces of software on a single system, so identifying whether you are running vulnerable code can be difficult. Thankfully, there are tools that can scan your servers and identify any versions of software that have open CVEs. Docker Scout, for example, can be used for this purpose when it comes to container images.

Once you have identified a piece of software you are using that has an open CVE, check the severity and elements that make up the CVSS score to determine what your next step should be.

#### CVEs in Portainer

CVEs can be reported against any piece of software, including Portainer. If we get a report of a CVE in our code, we take it extremely seriously.

Our first step is to look at the CVSS score and the elements that make up that score, as mentioned above. This helps us identify what action we need to take, and how quickly. We aim to adhere to the following timelines when resolving CVEs:

| **CVSS Score**            | **Resolution time**           |
| ------------------------- | ----------------------------- |
| High and Critical (> 7.0) | Within 12 weeks of disclosure |
| Medium (> 4.0 and < 7.0)  | Within 6 months of disclosure |
| Low (< 4.0)               | Time permitting               |

It's important to note that it is common for a CVE to be privately disclosed to the software vendor ahead of time, especially in the case of high severity vulnerabilities, so that the vendor can resolve the issue in a patch before it becomes public.

The next step we take is to identify whether the reported vulnerability is with Portainer itself, or one of the third-party binaries that we bundle in order to provide some of our functionality. Many of the CVEs that are reported against the Portainer image are not actually issues with Portainer itself, and are instead CVES in those third-party binaries (for example the Docker client, kubectl, or Helm). When this happens, we are at the mercy of the providers of those third-party binaries to resolve the CVEs within their product before we can bundle a patched version and release a new version of Portainer with it included. For popular binaries provided by large organizations this can be quick, but when dependencies are provided by smaller companies or are community-supported, this can extend the fix timelines. In fact, we have in the past had to entirely replace dependencies in Portainer because the library provider would not issue a fix within an acceptable timeframe.

Based on the CVSS score and exploitability of the CVE, as well as whether it affects Portainer directly or bundled third-party software, we will then determine a course of action. High severity CVEs will be tackled in patch releases, and we recommend that you keep Portainer up to date in order to keep yourself as protected as possible. You can find our [release dates](../../start/requirements-and-prerequisites.md) and our [release notes](../../release-notes.md) in our documentation. Lower severity CVEs may wait to be resolved until a new major version.

One final important note: The CVE system has little enforced validation of reports. The responsibility is on the CVE submitter to ensure they have properly validated the vulnerability as existing and for the report to have accurate and detailed information on the vulnerability. This can result in some [very unhelpful CVEs](https://www.cvedetails.com/cve/CVE-2021-41874/) that provide little to no information on the apparent exploit, making it very hard or impossible for us to identify and fix the issue. When this happens to Portainer, as the vendor we can mark the CVE as "disputed" but it will still appear open and public.

If you have any questions about any open CVEs with Portainer (and not one of our included binaries), please get in touch with our team and we can provide further detail.&#x20;
