# Why shouldn’t I give all Portainer users admin access?

Giving every user admin access in Portainer is risky because admins can modify or delete anything, including stacks, registries and production workloads. Instead, use [role-based access](../../admin/user/roles.md) and assign only the access each person needs.&#x20;

Restricting admin rights prevents accidental changes, limits the impact of mistakes, maintains separation of duties, and improves auditability. Admin access should be reserved for those who manage Portainer itself or handle cluster level configuration. Most users can deploy and manage their own apps without needing admin privileges. Treat admin access as highly privileged and review permissions regularly.
