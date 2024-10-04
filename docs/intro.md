---
sidebar_position: 1
---

# Introduction

## Docs Structure

```
Docs
├── Introduction
├── Reporters Panel Module
├── Aadhan Games
│   ├── Intro
│   ├── Dependencies
│   └── Explination
├── Aadhan Cricket
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── Aadhan Website
│   └── img
├── Aadhan Feed
└── Others
```

**Aadhan** projects are built using various powerful frameworks.

Let's explore **frameworks**.

## Frameworks

1. **[Remix](https://remix.run/docs/en/main)**.
2. **[Create React App](https://create-react-app.dev/docs/getting-started)**
3. **[FastApi](https://fastapi.tiangolo.com/)**
4. **[Node Js](https://nodejs.org/docs/latest/api/)**
5. **[Cloudflare Workers](https://developers.cloudflare.com/workers/)**

## Getting Started

Explore the **documentation** linked above for each framework to get started!

### Framework Guides

### Remix

#### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

#### Generate a new site

Generate a new remix site using the classic templates in **[Remix Docs](https://remix.run/docs/en/main)**.

```bash
npm create cloudflare@latest -- my-remix-app --framework=remix
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

#### Start project

Run the development server:

```bash
cd project-folder-name
npm run dev
```

Navigate to the server/network URL to view the project.

### Create React App

#### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

#### Generate a new site

Generate a new create react app site using the classic templates in **[Create React App](https://create-react-app.dev/docs/getting-started)**.

```bash
npx create-react-app project-name
cd my-app
npm start
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

#### Start project

Run the development server:

```bash
cd project-folder-name
npm start
```

Navigate to the server/network URL to view the project.

### FastApi

#### What you'll need

- [Python](https://www.python.org/doc/) version 3.10.12:
  - When installing python, you are recommended to check all checkboxes related to dependencies.

#### Generate a new app

Generate a new FastApi site using the classic templates in **[FastApi Docs](https://fastapi.tiangolo.com/)**.

##### create a virtual environment

```bash
pip install venv
python3 -m venv <envname>
```

##### install required dependencies

```bash
pip install fastapi uvicorn
uvicon main:app --reload
```

You can type this command into Commands Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

#### Run project

Run the app:

```bash
cd project-folder-name
pip install -r requirements.txt
uvicon main:app --reload
```

Navigate to the server/network URL to view the project.
