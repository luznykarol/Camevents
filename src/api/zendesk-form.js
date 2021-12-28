import fetch from 'node-fetch'

export default async function contactFormHandler(req, res) {
  if (req.method === 'POST') {
    const ticket = {
      request: {
        subject: req.body.subject,
        requester: {
          name: req.body.name,
        },
        comment: {
          body: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Inquiry: ${req.body.inquiry}</p><p>Message: ${req.body.message}</p>`,
        },
      },
    }

    try {
      const result = await fetch(
        'https://complyantapphelp.zendesk.com//api/v2/requests.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ticket),
        },
      ).then((res) => {
        return res.json()
      })

      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    return res.status(400)
  }
}
