##API Documention

Widget	Request Type	Base URL	   API Endpoint	                     Payload                                              
Event	GET	            /api/v3/app	   /nudge/:id	
	    GET	            /api/v3/app	   /nudge?tag=event&limit=5&page=1	
	    POST	        /api/v3/app	   /nudge	                        tag,title,description,schedule,files,icon,invitation
	    PUT	            /api/v3/app	   /nudge/:id	                    Same as POST payload
	   DELETE	        /api/v3/app	   /nudge/:id

Description
GET==> gets an nudge by its id
GET==>  Gets an nudge by its tag & paginate results by page number and limit of nudge per page
POST==> Creates a nudge and returns the Id of the nudge i.e. created
PUT==>Udates a nudge by its id
DELETE==>Deletes a nudge based on its Unique Id



##Object Data Model of a Nudge
tag:"event"
title: title of the nudge
description: description about nudge
schedule: (Date + time) Timestamp
files[image]: Image file (File upload)
icon: icon for nudge
invitation: One line String


