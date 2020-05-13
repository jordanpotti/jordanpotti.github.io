---
layout: page
title: The Red Team Maturity Matrix
permalink: /home/
---

A model to reference when gauging Red Team maturity, as well as set goals and provide guidance when building Red Teams.

 - Please exercise caution when using this model. 
 - This is not a one size fits all, the matrix should be modified to fit the needs of your organization.
 - Maturity levels do not dictate the success of your Red Team. [There are lots of other things at play.](/meta)
 
## The Model
<body>
<div>
<table class="rwd-table">
					<tr>
						<td style=min-width:50px></td>
						<td style=min-width:50px>Level 1 - Defined</td>
						<td style=min-width:50px>Level 2 - Managed</td>
						<td style=min-width:50px>Level 3 - Optimized</td>
					</tr>
					<tr>
						<td style=min-width:50px>People</td>
						<td style=min-width:50px>•Strong leadership support from at a minimum CSO.<br />
•Defined team roles and responsibilities.<br />
•Defined capabilities per operator. Eg. Developer, Infrastructure support, etc.<br />
•Training classes and time available as pertains to strengths/weaknesses of Red Team.</td>
						<td style=min-width:50px>•Operators considered Subject Matter Experts in targeted tech stacks and processes. Eg. cloud, finance, payment processing.<br />
•Strengths, weaknesses and operator capabilities regularly evaluated.</td>
						<td style=min-width:50px>•Job shadow opportunities defined for red/blue/SRE, etc.<br />
•Organization wide support for Red Team.<br />
•Dedicated developers, operators, leads, etc*
</td>
					</tr>
					<tr>
						<td style=min-width:50px>Processes</td>
						<td style=min-width:50px>•Defined Rules of Engagement<br />
•Defined reporting processes and templates.<br />
•Defined deconfliction process.<br />
•Defined services, intake and output processes.<br />
•Defined Mission Statement</td>
						<td style=min-width:50px>•Ability to measure Red Team impact<br />
•Findings integrated into GRC processes and intakes.<br />
•Defined run books for common TTP’s.<br />
•Risk scoring consistent with GRC, rest of organizations risk scoring procedures.<br />
</td>
						<td style=min-width:50px>•Defined processes and support for publishing and contributing open source tooling<br />
•Red Team impact leads to measurable organizational improvements such as blue headcount, training opportunities, systemic security posture, etc.<br />
•Regular Red Team self reflection and improvement cycles.
</td>
					</tr>
					<tr>
						<td style=min-width:50px>Technology</td>
						<td style=min-width:50px>•Open source only capabilities (tools, vulns, exploits, C2s)<br />
•Manual infrastructure, logging and labs.
</td>
						<td style=min-width:50px>•Ability to use commercial C2 options<br />
•Custom tools and scripts.<br />
•Lab with target environment tech stack.<br />
•Automated infrastructure deployment.<br />
•Automated logging and storage.<br />
•Automation/validation of TTPs and blue controls (atomic rt style)</td>
						<td style=min-width:50px>•Custom C2 and implant capabilities.<br />
•0 day exploit capabilities.<br />
•Automated reporting capabilities.
</td>
					</tr>
					<tr>
					<tr>
						<td style=min-width:50px>Red Team</td>
						<td style=min-width:50px>•Ad hoc operations and goals.<br />
•Technology focused ops<br />
•Opportunity driven TTPs<br />
•Understanding of blue maturity<br />
•Metrics gathered per operation:<br />
  Mean time to (detect|respond|eradicate)
  What processes were/not followed<br />
•Ability to answer the BASE Questions</td>
						<td style=min-width:50px>•Some proactive operations<br />
•TTP's based loosely on threat groups<br />
•Ability to answer the ADVANCED Questions<br />
•TTP’s determined per operation based on Threat Intel
</td>
						<td style=min-width:50px>•Accurate/intentioned threat group emulated modus operandi<br />
•Long term operations addressing existential business risks.<br />
•Proactively planned operations .<br />
•Ability to leverage target technology SMEs (cloud, devops, finance, domain tech)<br />
•Requirement to use novel TTP’s in many cases to bypass defense.
</td>
					</tr>

</table>
</div>
</body>


## The Questions

**The Questions** are sets of questions that need to be answered at a given maturity level. The answers are highly dynamic and should be reveiwed frequently. 

#### Base Questions
	What does blue assume about their own abilities?
	Who/What is targeting your organization? 
	What are your organizations crown jewels?
	Where are the strengths and weaknesses of the blue team?

#### Advanced Questions
	Where does the critical data live, and how is it transferred between systems?
	Who has access to the critical data? Who is supposed to have access to it?



