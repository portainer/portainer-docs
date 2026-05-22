---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/Dalese9Lv4CX6YKS1s45/user/kubernetes/more-resources/jobs
---

# Cron Jobs & Jobs

This section lists the Cron Jobs and Kubernetes Jobs on your Kubernetes cluster. New cron jobs and Kubernetes Jobs can be created via the **Create from code** button.

Select the relevant tab to switch between Cron Jobs and Jobs.

## Cron Jobs

The list of cron jobs can be sorted by any of the columns and filtered by Namespace, and can be expanded to view the executions for each cron job where you can see the status, start and finish times, duration, and view the logs for the execution by clicking **Logs**.

To remove a cron job, check the box next to the cron job you want to remove then click the **Remove** button.

<figure><img src="../../../.gitbook/assets/2.41-cron-job-list.png" alt=""><figcaption></figcaption></figure>

Click the cron job **name** to open the cron job details page, where you can view the cron job description and edit the YAML.

To edit the cron job YAML, select the **YAML** tab and make your changes directly in the editor. Then select **Apply changes** in the bottom-right corner to patch the modified resources through the Kubernetes API. Any removed resources or unexpected changes to resources are ignored. Resources in namespaces marked as **system** cannot be edited.

To view details of the cron job, select the **Describe** tab.

<figure><img src="../../../.gitbook/assets/2.41-cron-job.png" alt=""><figcaption></figcaption></figure>

## Jobs

The list of Kubernetes Jobs can be sorted by any of the columns and filtered by namespace, and the logs for Jobs can be listed by clicking **Logs**.

To remove a Job, check the box next to the Job you want to remove then click the **Remove** button.

<figure><img src="../../../.gitbook/assets/2.41-k8-job.png" alt=""><figcaption></figcaption></figure>

Click the Job **name** to open the Job details page, where you can view the Job description and edit the YAML.

To edit the Job YAML, select the **YAML** tab and make your changes directly in the editor. Then select **Apply changes** in the bottom-right corner to patch the modified resources through the Kubernetes API. Any removed resources or unexpected changes to resources are ignored. Resources in namespaces marked as **system** cannot be edited.

To view details of the Job, select the **Describe** tab.

<figure><img src="../../../.gitbook/assets/2.41-kube-job.png" alt=""><figcaption></figcaption></figure>
