---
title: Measuring Your Red Team
author: jp
type: post
date: 2020-11-23T20:37:56+00:00
url: /2020/11/23/measuring-your-red-team/
categories:
  - red team
---


How do you measure your Red Team? 

One of the primary differences between a Red Team and a Penetration Testing team is the primary stakeholder. With a Red Team, the primary stakeholders are those responsible for your detection and response capabilities. That being said, a side effect of Red Team operations are uncovering vulnerabilities and weaknesses owned by, lets say IT. 

So based on those generic statements, we can begin to consider how we might be able to determine if we, as a Red Team, are uplifting the security of the organization. 

Lets start with some easy to come by metrics:

- Vulnerabilities discovered/remediated
- Success rate of phishing emails
- Amount of “operations” - categorized by operation type

Those metrics are nice, but they don’t address our primary stakeholders. Having a strong understanding of the blue teams weaknesses, strengths as well as how the blue team measures their own performance, will help the Red Team determine what metrics are important to gather. 

Some of the basics are:

- **Mean time to detect** - Shows improvement in detection capabilities
- **Mean time to respond** - Shows improvement in response capabilities
- **Mean time to initial access** - Shows improvement in perimeter security/phishing controls
- **Mean time to act on objectives from beginning of op** - Shows increase in defense posture holistically 
- **Mean time from reporting, to detection/control in place** - Shows improvements in detection engineering capabilities
- **Amount of detection's trending activity** - Shows improvements in detection and response capabilities based on Red Team activity

Now that we have a good start for understanding what needs tracked at the macro level, we need solid tracking of the micro events. One way to do this, is to have a spreadsheet per operation that tracks all the relevant details of each action performed:

- **TTP** - Map to the Mitre ID, this allows a heat map to be created which identifies areas of strengths and weaknesses in detection capabilities.
- **Kill Chain Step** - Similar to the above, this lets us see detection and response capabilities strengths and weaknesses
- **Hostname**
- **Host type** - Allows us to see which OS’s have various strengths and weaknesses
- **Type of detection expected/lacking** - Allows us to map which controls are performing well, or under performing. 
- **Action timestamp** - Make sure this is in a timestamp compatible with the SOC’s SIEM or standard. 
- **Detection timestamp** - Make sure this is in a timestamp compatible with the SOC’s SIEM or standard. 
- **Response timestamp** - Make sure this is in a timestamp compatible with the SOC’s SIEM or standard. 
- **Business Unit** - Allows us to see which business units are lacking, can identify business units that might need more collaboration with the security org.
- **Whether or not detection was intentional** - This allows us to include/exclude actions that may have intentionally alerted the defense team, it also allows us to see where the Red Team needs to improve preparation if we are generating alerts in places we don’t want. 

Leveraging the Mitre Attack framework allows the Red Team to begin to see the strengths and weaknesses of the blue team, which allows for intentional operations maximizing value add. 

For an example of a spreadsheet that tracks much of this data, check out Cedric Owens GitHub project: [https://github.com/cedowens/Rolling_Op_Metrics]


References:

[https://medium.com/red-teaming-with-a-blue-team-mentaility/helpful-red-team-operation-metrics-fabe5e74c4ac]

[https://medium.com/starting-up-security/measuring-a-red-team-or-penetration-test-44ea373e5089]

