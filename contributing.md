# Contributing to Portainer Documentation

We aspire to have all Portainer documentation in one easily accessible location, for past and current releases. To see the live version of these docs, please visit our [documentation site] (https://documentation.portainer.io).

## To Suggest Updates

### Fork and clone Portainer Documentation Repository
[Fork this repository](https://help.github.com/articles/fork-a-repo/) and [clone it](https://help.github.com/articles/cloning-a-repository/) to your local machine.

### Run the documentation locally (optional)
To run the documentation locally, follow the instructions provided in the [README](readme.md).

### Make your changes
Make your suggested changes being sure to follow the [style and formatting guidelines](#style--formatting) outline below.

### Submit a pull request
Push your changes up to your forked repository, then [create a new pull request](https://help.github.com/articles/creating-a-pull-request/).

## Style & Formatting

### Markdown
All of our documentation is written in [Markdown](https://en.wikipedia.org/wiki/Markdown).

### Semantic Linefeeds
Use [semantic linefeeds](http://rhodesmill.org/brandon/2012/one-sentence-per-line/).
Separating each sentence with a new line makes it easy to parse diffs with the human eye.

**Diff without semantic linefeeds:**
``` diff
-Kubernetes is taking off. You need a cool management tool to manage it. You should check out Portainer.
+Kubernetes is taking off. You need a cool management tool to manage it. You need Portainer.
```

**Diff with semantic linefeeds:**
``` diff
Kubernetes is taking off.
You need a cool management tool to manage it.
-You should check out Portainer.
+You need Portainer.
```

### Details
We want to build a reliable Admin guide for each version of Portainer. It's essential to explain the details about that configuration/installation or troubleshooting guide. We don't want an over-simplified guide or tutorial. Try not to use acronyms, but if you are, please create a link to an explanation about those.

### Screenshots

Screenshots are welcome. Make sure that you're using the version of Portainer of the documentation you're writing. If you're contributing to Portainer CE v2.0, use an instance of Portainer CE 2.0 to take screenshots.

### Doubts and questions.

We're thankful for your contributions; if you have any questions or concerns please feel free to open an issue, contact us via our [slack channel] (https://portainer.slack.com). 

#### Doc Contributions

We welcome and encourage community contributions.
For information about contributing to the Portainer documentation, see [Contribution guidelines](contributing.md).