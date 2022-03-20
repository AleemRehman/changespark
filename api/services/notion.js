const dotenv = require("dotenv").config()
const { Client } = require("@notionhq/client")

const notion = new Client({
  auth: process.env.NOTION_API_SECRET,
})

const database_id = process.env.NOTION_DATABASE_ID

async function createLogEntry(data) {
  const payload = {
    path: `databases/${database_id}/query`,
    method: "POST",
  }

  console.log(data)
}

async function scrapeLogData(data) {
  var payload = {}

  payload = {
    parent: {
      database_id: database_id,
    },
    properties: {
      Hash: {
        rich_text: [
          {
            text: {
              content: "A dark green leafy vegetable",
            },
          },
        ],
      },
      Name: {
        title: [
          {
            text: {
              content: "Tuscan Kale",
            },
          },
        ],
      },
      Description: {
        rich_text: [
          {
            text: {
              content: "A dark green leafy vegetable",
            },
          },
        ],
      },
    },
  }
}

module.exports = {}
