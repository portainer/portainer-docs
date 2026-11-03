# Audit log

The Audit log is an admin-only page listing every change made through Portainer-IDP, newest first, with the Portainer user who made it. Choose any event to see its full record.

## What's recorded

Every change made through Portainer-IDP: deploying, editing, scaling, restarting, rolling back and deleting applications; creating and changing secrets, namespaces and deploy targets; Git writes; catalog changes; and settings changes. Each event records whether it **Succeeded**, **Failed** or was **Denied**, and, where it applies, the deploy targets, commits and files involved, and the IP address the request came from.

Administrator overrides of the [Helm policy](helm-charts.md) are recorded too, with each rule that was overridden.

## Finding events

* **Search activity…** matches users, actions, object names and ids, deploy targets, commits, files and errors.
* Filter by date range and by user.
* **Filter by outcome or action** narrows to an outcome (**Succeeded**, **Failed**, **Denied**) or a kind of action (**Applications**, **Secrets**, **Namespaces**, **Git writes**, **Deploy targets**, **Catalog**, **Settings**).
* **Show older** loads more.

## Exporting and sharing

* **Download the filtered events** exports the events matching your filters **as CSV** or **as JSON**. The export is itself recorded.
* **Copy details**, in an event's drawer, copies the event as text, ready to paste into a ticket or another tool.

## Per-object activity

Applications, secrets and deploy targets each have an **Activity** tab showing the changes made to that object. Anyone who can view the object can see its activity; the full Audit log is for administrators only.

## Retention

By default, events are kept for 90 days, up to 100,000 events, in the add-on's database. Each event is also written to the add-on's standard output as a JSON line tagged `portainer-idp.audit`, so your existing log pipeline or SIEM can collect it. All three can be changed with the chart's `audit.retentionDays`, `audit.maxEvents` and `audit.stdout` values.

{% hint style="warning" %}
If the audit store stops accepting writes, Portainer-IDP pauses changes until it can record them again, rather than make changes it can't account for. The Audit log shows an alert when this happens.
{% endhint %}
