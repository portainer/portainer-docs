# What does a 500 error code mean?

When performing actions within Portainer that involve interacting with the Docker engine (for example creating or updating a container) you may run into issues where Portainer returns a 500 error message when performing the action. This can make it difficult to understand the underlying cause of the error.

Improving the way that we display error messages that are passed to us from the containerization engine is something that is a high priority for us, so you can expect to see this coming in future releases. In the meantime, you can dig into the detail in many cases by first opening your web browser's developer console and then performing the action that results in the error.&#x20;

To open the developer tools:

* **Chrome:** press **Ctrl-Shift-I** on Windows (or **Cmd-Option-I** on Mac), or click the three dot menu in the top right and go to **More tools**, then select **Developer tools**.
* **Firefox:** press **Ctrl-Shift-I** on Windows (or **Cmd-Option-I** on Mac), or click the three line menu in the top right and go to **More tools**, then select **Web Developer Tools**.
* **Microsoft Edge:** press **Ctrl-Shift-I** or click the three dot menu in the top right and go to **More tools**, then select **Developer tools**.
* **Safari:** From the Safari menu, select **Preferences**, then **Advanced**. Check the **Show Develop menu in menu bar** option. You can then access the developer tools from the **Develop** menu in the menu bar.

With the tools open, select the **Network** tab, then go back to the Portainer window (keeping the developer tools open) and perform the action. Then go back to your developer tools window and find the call in the Network tab that has reported the 500 error (it should be highlighted in red). Select it, then select the **Response** tab. This should hopefully show you the error returned from the engine.
