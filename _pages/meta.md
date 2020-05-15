---
layout: page
title: Meta
permalink: /meta/
---

## Ingredients for a High Functioning Red Team

Red Teaming. Ask ten different people what it is, and you get ten different answers. Ask ten different red teamers how their program works, and you will also get ten different answers. While there is no end to the opinions in this space and every organizations culture influences its security programs, many of us can agree on some required capabilities of your Red Team that indicate your programs level of maturity. Or at the very least, a set of guidelines that can be used as a framework to build out a Red Team.

This resulted in the [Red Team Maturity Matrix](/home). While the matrix can be used to rate a programs maturity, it can’t always determine success. A successful Red Team needs to have a good leader, empathetic operators, and a variety of other sugars and spices. Many of these aspects are applicable to many disciplines and this is certainly not an exhaustive list.

### Some Guiding Principles for Red Teams and the Red Team Operator

#### On Generalities

Red team yourselves. Throw down the gauntlet for reports, findings, risk scores and processes. Include the entire Red Team. Everyone should feel obligated to share their opinions regardless of rank or position. 

Assume nothing. Assuming makes a poor red teamer.

Whatever tool/tech you use. Learn it to the best of your ability. 

If you don’t have a ROE’s, SOP’s, etc, you are doing it wrong. 

Transparency to a fault. This applies to leadership, TTP’s, and just about most things in the workplace. 

Have a mission statement. Having something to back up why you’re saying no is crucial. 

Red Team members must feel empowered to speak up and voice their opinions regardless of rank or position. Its part of being a Red Teamer.

Get creative. You’re not a real APT. You can gamify things. If you walked all over the blue team, turn it into a learning opportunity for them. Instead of cleaning up your own access, give them a spreadsheet with all the details. Leave out some of the key items, add some questions and let them investigate your access while its still live. 

Fight your cynicism. Very few things can create a toxic environment like cynicism. Cynicism is contagious and removes the fulfilling part of your job. If you can’t get over it, go elsewhere. You owe it to yourself, and your teammates. 

You can train skills, but you can’t train someone to be curious or to think about things differently than others. This is important to determine in the interview stages. Ask how they solved a problem when no one else could. 

#### On Relationships

Empathy is one of the few magic ingredients of a successful relationship with other groups in your organization. A Red Team is uniquely positioned to apply seriously critical investigation into products and processes built by the folks you get to work with. Learning how to have empathetic conversations is critical. 

Your Red Team is not smarter than the engineers that deployed that new product that ended up being riddled with security vulnerabilities and broken processes. Be humble. Unlike the Red Team, teams deploying products and infrastructure are driven by customer requirements, and commonly have strong pressure from leadership to get things done quicker and cheaper. 

Your Red Team is not smarter than the Blue Team. Be humble. 

Reputation of the Red Team will dictate its success and impact it can have on an organization.

Sometimes, the Red Team needs to make sacrifices. Being asked to step in and help with a product assessment, a pentest or other non Red Team engagements are a great way to build a reputation. Remember to make the Red Teams missions statement and services known for your next interaction. 

#### On Reporting

Report writing is the most important skill you can spend your time honing. If you can’t communicate risk, your work is not going to make an impact. A well written report with medium findings, can have more impact than a poorly written report with critical findings. 

Execute everything with an attention to detail unlike anything you have ever seen. This applies heavily to reporting. The Red Team should be able to back up every single sentence in your reports. 

Recommendations should be standardized. What are you recommending? Does it fix one instance of the issue? Or does it fix the root cause? Should you recommend both? How do you differentiate the two? 

Can you back up the recommendation when the SME you are reading out with has a differing opinion?

Spend time revisiting old findings. Make a findings matrix with details like the reporting medium, the team responsible, date, scale of issue and severity. This will help the Red Team find themes in issues that don’t seem to get fixed.

If legal gets involved, things get fixed much faster. 

#### On Making Mistakes

We must understand two things about mistakes, they happen, and they are avoidable. Mistakes provide us with excellent opportunities for growth and should be treated as such. 

Mistakes that result in incidents, down time for users, or other business impact aren’t typically the goal of an operation. From time to time, they do happen though. No matter the scale, this is the time to do a full debrief with the Red Team, discuss what went wrong, what could have done better, what shortcuts were taken and how processes, procedures and technology can prevent the mistake from happening again. From there, a writeup including lessons learned should be shared with all impacted teams. 

Never pass the blame. Be internally focused. 

#### On Execution

When something goes wrong, being able to point back to test results and detailed logs will go a long way. There are few things worse than saying “We don’t have logs” or “We didn’t test this beforehand”.

Deconfliction processes should be determined well before operation kickoff. Ideally, the blue team has deconfliction as a step in their run book at the point where an incident is about to turn into something much larger. 

Always have two sets of eyes when executing. Typically, the senior person takes notes, the junior person operates. 

Conducting daily briefs to go over actions, concerns and tangential plans will keep your red team on track and prepared for possible issues.

Conducting debriefs post actions will improve your Red Team. Talk about what went well, give team members credit where credit is due and discuss what could have went better. Keep a tab of takeaways for post operation process and technology improvement. 

Automation is important. Any action ran more than once should be automated. This is for several reason, the obvious one is that it saves time, the other is that it ensures operator error is less likely to happen.

Test everything and assume nothing. 

One of the biggest hang-ups for C2 or shells is what happens when something hangs. Determine what ctl+c does before running shell/implant during an operations. Nothing worse than losing a shell from a phish due to an avoidable mistake.

Your infrastructure should be automated, not just because it saves time, but because your target is also automating their infrastructure and there are few better ways to learn than doing. 

Just because your shell/implant got past AV today, doesn’t mean it will tomorrow. Also, running those modules in your C2 framework might just get flagged even if your initial implant didn’t. 

#### On Knowledge

Always seek to understand what a tool is doing before using it. This goes for most things, an honest effort to understand something may result in failure, but you aren’t going to understand anything without trying. 

A solid understanding of the basics will let you get away with a not so clear understanding of the nitty gritty details. Start with the basics. 

The problem with learning is that chapter one is usually full of everything about the entire topic. This creates a sense of despair. Skip the intro and dive in. Go back after wading into the topic, the intro will make more sense that way anyways. 

Don’t expect to be an expert in one day, take bite size pieces of your topic of choice when you have the time. You’ll either slowly learn it, or become disinterested. Either way, there are enough areas in Red Team that you can get away with not being an expert in all things. 

Looking for your niche is like determining what you want to be when you grow up. It works for some people, but chances are, you’ll just end up becoming good at something and it’ll end up being your niche. 

[Don’t be the chauffer](https://fs.blog/2015/09/two-types-of-knowledge/)



