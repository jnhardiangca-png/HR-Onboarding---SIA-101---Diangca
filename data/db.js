module.exports = {
  employees: [
    {
      id: 1,
      name: "Juan Dela Cruz",
      position: "HR Manager",
      department: "Human Resources",
      email: "juan.delacruz@email.com"
    },
    {
      id: 2,
      name: "Maria Santos",
      position: "Software Developer",
      department: "IT",
      email: "maria.santos@email.com"
    },
    {
      id: 3,
      name: "John Reyes",
      position: "UI/UX Designer",
      department: "Design",
      email: "john.reyes@email.com"
    },
    {
      id: 4,
      name: "Anna Lim",
      position: "Marketing Specialist",
      department: "Marketing",
      email: "anna.lim@email.com"
    },
    {
      id: 5,
      name: "Mark Garcia",
      position: "System Analyst",
      department: "IT",
      email: "mark.garcia@email.com"
    },
    {
      id: 6,
      name: "Sofia Cruz",
      position: "Accountant",
      department: "Finance",
      email: "sofia.cruz@email.com"
    }
  ],

  workflows: [
    {
      id: 101,
      title: "Employee Onboarding",
      description: "Process for new hires",
      status: "Pending"
    },
    {
      id: 102,
      title: "Leave Approval",
      description: "Approve employee leave requests",
      status: "Active"
    },
    {
      id: 103,
      title: "Promotion Workflow",
      description: "Employee promotion review process",
      status: "Pending"
    },
    {
      id: 104,
      title: "Salary Adjustment",
      description: "Annual salary evaluation process",
      status: "Active"
    },
    {
      id: 105,
      title: "Offboarding Process",
      description: "Employee exit clearance workflow",
      status: "Pending"
    }
  ],

  tasks: [
    {
      id: 201,
      title: "Submit Documents",
      assignedTo: 1,
      workflowId: 101,
      status: "Pending"
    },
    {
      id: 202,
      title: "Setup Workstation",
      assignedTo: 2,
      workflowId: 101,
      status: "Pending"
    },
    {
      id: 203,
      title: "Design UI Mockups",
      assignedTo: 3,
      workflowId: 102,
      status: "Completed"
    },
    {
      id: 204,
      title: "Prepare Marketing Plan",
      assignedTo: 4,
      workflowId: 103,
      status: "Pending"
    },
    {
      id: 205,
      title: "System Audit",
      assignedTo: 5,
      workflowId: 104,
      status: "Pending"
    },
    {
      id: 206,
      title: "Financial Report Review",
      assignedTo: 6,
      workflowId: 104,
      status: "Completed"
    },
    {
      id: 207,
      title: "Exit Interview Setup",
      assignedTo: 1,
      workflowId: 105,
      status: "Pending"
    }
  ],

  approvals: [
    {
      id: 301,
      type: "Leave Request",
      submittedBy: "Juan Dela Cruz",
      description: "Vacation leave for 5 days",
      date: "2026-05-01",
      status: "Approved"
    },
    {
      id: 302,
      type: "Promotion",
      submittedBy: "Maria Santos",
      description: "Promotion to Senior Developer",
      date: "2026-05-02",
      status: "Pending"
    },
    {
      id: 303,
      type: "Salary Change",
      submittedBy: "Mark Garcia",
      description: "Annual salary increase request",
      date: "2026-05-03",
      status: "Approved"
    },
    {
      id: 304,
      type: "Leave Request",
      submittedBy: "Anna Lim",
      description: "Sick leave request",
      date: "2026-05-04",
      status: "Rejected"
    },
    {
      id: 305,
      type: "Purchase Order",
      submittedBy: "Sofia Cruz",
      description: "Office equipment purchase",
      date: "2026-05-05",
      status: "Pending"
    },
    {
      id: 306,
      type: "Promotion",
      submittedBy: "John Reyes",
      description: "Promotion to Senior Designer",
      date: "2026-05-06",
      status: "Approved"
    }
  ],

  logs: [
    {
      id: 401,
      action: "Created Employee",
      performedBy: "Admin",
      date: "2026-05-01"
    },
    {
      id: 402,
      action: "Workflow Created",
      performedBy: "HR Manager",
      date: "2026-05-01"
    },
    {
      id: 403,
      action: "Task Completed",
      performedBy: "Maria Santos",
      date: "2026-05-02"
    },
    {
      id: 404,
      action: "Approval Approved",
      performedBy: "Juan Dela Cruz",
      date: "2026-05-03"
    },
    {
      id: 405,
      action: "Employee Updated",
      performedBy: "Admin",
      date: "2026-05-03"
    },
    {
      id: 406,
      action: "Workflow Updated",
      performedBy: "HR Manager",
      date: "2026-05-04"
    },
    {
      id: 407,
      action: "Task Assigned",
      performedBy: "System",
      date: "2026-05-05"
    }
  ]
};