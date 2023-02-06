# View service logs

From the menu select **Services**, select the service whose logs you want to view then click **Service logs**.

<figure><img src="../../../.gitbook/assets/2.17-services-logs.gif" alt=""><figcaption></figcaption></figure>

Here you can see the contents of the Docker logs for your service.&#x20;

| Field/Option          | Overview                                                                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Search                | Enter a string to search the log output. You can see the number of results for your search and move through each result with the up and down arrows. |
| Filter search results | When enabled, display only the log lines that contain your search string.                                                                            |
| Copy                  | Click this button to copy the currently displayed log lines to your clipboard.                                                                       |
| Download logs         | Click this button to download your log.                                                                                                              |

<figure><img src="../../../.gitbook/assets/2.17-containers-logs-search.png" alt=""><figcaption></figcaption></figure>

You can also set various options for how the logs are displayed:

| Field/Option      | Overview                                                                                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auto-refresh      | Toggle this option off to disable auto refreshing of the log view. When off, you can click the refresh icon to the right of the toggle to manually refresh the view. |
| Fetch             | Select the time period from which to retrieve the logs.                                                                                                              |
| Lines             | Limit the number of lines per log file (the default is 1000).                                                                                                        |
| Show timestamp    | When enabled, display a timestamp before each log line.                                                                                                              |
| Show line numbers | When enabled, display line numbers for each log line.                                                                                                                |
| Wrap line         | When enabled, lines longer than the screen width will be wrapped onto the next line.                                                                                 |
| Full screen       | Click the full screen icon to expand the log display to fill your screen.                                                                                            |

<figure><img src="../../../.gitbook/assets/2.17-containers-logs-options.png" alt=""><figcaption></figcaption></figure>
