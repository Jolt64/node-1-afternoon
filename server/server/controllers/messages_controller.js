let messages = []

let id = 0



module.exports = {


    create: (req, res ) => {
        const { text, time } = req.body
        messages.push({
            id,
            time, 
            text 
            })
        id++
        res.status(200).send(messages)
    },


    get: (req, res) => {
        res.status(200).send(messages)
    },


    update: (req, res) => {
        let index = null
        const { text, time } = req.body
        const { id } = req.params

        messages.forEach((message, i) => {
            if(message.id === id * 1) {
                index = i
            }
        });
        messages[index] = {
            id: messages[index].id,
            text: text || messages[index].text,
            time: time || messages[index].time
        }
        res.status(200).send(messages)
    },

    message: (req, res) => {
        let index = null
        const { id } = req.params

        messages.forEach((message, i) => {
            if(message.id === id * 1) {
                index = i
            }
        });

        messages.splice(index, 1)
        res.status(200).send(messages)

    }
}