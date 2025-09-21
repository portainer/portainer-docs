# Runtime and Resource sliders are not showing the set value on ARM

#### Issue Description

When you try to "Duplicate/Edit" a container, the tab Runtime & Resources shows the already selected value for CPU limit slider, but Memory reservation and Memory limit sliders are always reset to zero.&#x20;

#### Cause

Docker on ARM platforms does not provide support for memory reservations or limits, so as a result this is reset to zero. This functionality works as expected on x64 platforms.
