---
layout: page
title: A Red Team Maturity Model
permalink: /home/
---

A model to reference when gauging Red Team maturity, as well as set goals and provide guidance when building internal Red Teams.[\*](#disclaimer)

 [**The Matrix**](#the-matrix) - This is the core of the model.
 
 [**The Questions**](#the-questions) - Questions that need to be answered and understood at each level of maturity.
 
 [**Meta**](/meta) - This are bits of wisdom that aren't covered in a standard maturity model, but will play a large role in the success of a Red Team.

## The Matrix

<table class="table table-striped table-bordered">
	<thead>
	<tr>
		<td></td>
		<td><b>Level 1 - Defined</b></td>
		<td><b>Level 2 - Managed</b></td>
		<td><b>Level 3 - Optimized</b></td>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td class="first"><b>People</b></td>
		<td>•Strong leadership support from Blue Team.
			<br /> •Defined team roles and responsibilities.
			<br /> •Defined capabilities per operator. Eg. Developer, Infrastructure support, etc.
			<br /> •Training classes and time available as pertains to strengths/weaknesses of Red Team.</td>
		<td>•Operators considered Subject Matter Experts in targeted tech stacks and processes. Eg. cloud, finance, payment processing.
			<br /> •Strengths, weaknesses and operator capabilities regularly evaluated.
		<br /> •Organization wide support for Red Team.
		<br /> •Internal professional development program. Eg. Options to level up in certain areas given training, certifications, practical experience, etc.</td>
		<td>•Job shadow opportunities defined for red/blue/SRE, etc.
			<br /> •Dedicated developers, operators, leads, etc. </td>
	</tr>
	<tr>
		<td class="first"><b>Processes</b></td>
		<td>•Defined Rules of Engagement
			<br /> •Defined reporting processes and templates.<sup><a href="https://redteam.guide/docs/templates/report_template/">[1]</a></sup>
			<br /> •Defined deconfliction process.<sup><a href="https://redteam.guide/docs/definition-lexicon/#deconfliction">[2]</a></sup>
			<br /> •Defined services, intake and output processes.
			<br /> •Defined Mission Statement
			<br /> •Defined KPI's</td>
		<td>•Ability to measure Red Team impact <sup><a href="https://medium.com/starting-up-security/measuring-a-red-team-or-penetration-test-44ea373e5089">[3]</a></sup>
			<br /> •Findings integrated into GRC processes and intakes or dedicated remediation personnel.
			<br /> •Defined run books for common TTP’s.
			<br /> •Risk scoring consistent with GRC, rest of organizations risk scoring procedures.
			<br /> •Strong partnership with Legal.
			<br /> </td>
		<td>•Defined processes and support for publishing and contributing open source tooling or knowledge.<sup><a href=" https://gitlab.com/gitlab-com/gl-security/gl-redteam/red-team-tech-notes">[4]</a></sup>
			<br /> •Red Team impact leads to measurable organizational improvements such as blue headcount, training opportunities, systemic security posture, etc.
			<br /> •Regular Red Team self reflection and improvement cycles. </td>
	</tr>
	<tr>
		<td class="first"><b>Technology</b></td>
		<td>•Open source only capabilities (tools, vulns, exploits, C2s)
			<br /> •Manual infrastructure, logging and labs. </td>
		<td> •Custom tools and scripts.
			<br /> •Lab with target environment tech stack.
			<br /> •Automated infrastructure deployment.
			<br /> •Automated logging and storage. 
			<br /> •Automation/validation of TTP's and blue controls<sup><a href="https://github.com/redcanaryco/atomic-red-team">[5]</a></sup></td>
		<td>•Custom C2 and implant capabilities.
			<br /> •0 day exploit capabilities.
			<br /> •Automated reporting capabilities. </td>
	</tr>
	<tr>
			<td class="first"><b>Red Team</b></td>
			<td>•Ad hoc operations and goals.
				<br /> •Technology focused ops
				<br /> •Opportunity driven TTP's
				<br /> •Understanding of blue maturity
				<br /> •Metrics gathered per operation:
				<br /> Mean time to (detect|respond|eradicate) <br />What processes were/not followed?<sup><a href="https://idart.sandia.gov/_assets/documents/2017-09-13_Metrics_QRS-Paper-Size.pdf">[6]</a></sup>
				<br /> •Ability to answer the <a href="#base-questions">BASE Questions</a> </td>
			<td>•Some proactive operations
				<br /> •TTP's based loosely on threat groups
				<br /> •Ability to answer the <a href="#advanced-questions">ADVANCED Questions</a>
				<br /> •TTP’s determined per operation based on Threat Intel </td>
			<td>•Accurate/intentioned threat group emulated modus operandi
				<br /> •Long term operations addressing existential business risks.
				<br /> •Proactively planned operations .
				<br /> •Ability to leverage target technology SMEs (cloud, devops, finance, domain tech)
				<br /> •Requirement to use novel TTP’s in many cases to bypass defense. </td>
    </tr>
</tbody>
</table>

References:
<p><sup><a href="https://redteam.guide/docs/templates/report_template/">https://redteam.guide/docs/templates/report_template/</a></sup><br />
<sup><a href="https://redteam.guide/docs/definition-lexicon/#deconfliction">https://redteam.guide/docs/definition-lexicon/#deconfliction</a></sup><br />
<sup><a href="https://medium.com/starting-up-security/measuring-a-red-team-or-penetration-test-44ea373e5089">https://medium.com/starting-up-security/measuring-a-red-team-or-penetration-test-44ea373e5089</a></sup><br />
<sup><a href="https://gitlab.com/gitlab-com/gl-security/gl-redteam/red-team-tech-notes">https://gitlab.com/gitlab-com/gl-security/gl-redteam/red-team-tech-notes</a></sup><br />
<sup><a href="https://github.com/redcanaryco/atomic-red-team">https://github.com/redcanaryco/atomic-red-team</a></sup><br />
<sup><a href="https://idart.sandia.gov/_assets/documents/2017-09-13_Metrics_QRS-Paper-Size.pdf">https://idart.sandia.gov/_assets/documents/2017-09-13_Metrics_QRS-Paper-Size.pdf</a></sup>
<sup><a href="https://medium.com/@malcomvetter/how-to-create-an-internal-corporate-red-team-1023027ea1e3">https://medium.com/@malcomvetter/how-to-create-an-internal-corporate-red-team-1023027ea1e3</a></sup></p>


## The Questions

**The Questions** are sets of questions that need to be answered at a given maturity level. The answers are highly dynamic and should be reviewed frequently. 

#### Base Questions
	What does blue assume about their own abilities?
	Who/What is targeting your organization? 
	What are your organizations crown jewels?
	Where are the strengths and weaknesses of the blue team?
	How do employees gain and lose authorization to access data and systems?
	What assets are important?
	What does the perimeter look like? 
	

#### Advanced Questions
	Where does the critical data live, and how is it transferred between systems?
	Who has access to the critical data? Who is supposed to have access to it?
	What processes are critical?
	What supply chains have the greatest impact on the org?
	How does the company function? This is a loaded question, it includes culture, salary, hiring techniques, etc. 


### Disclaimer

This is not a one size fits all, the matrix should be modified to fit the needs of your organization. 

This model is based on my limited experience working as a Red Team Operator, not from experience building and running Red Teams.
