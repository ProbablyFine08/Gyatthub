Gyatthub

A 24hr project for appbuilders

Theme: Local AI

# 🧠 Framework Buddy

## *Learn frameworks. Build with confidence.*

Framework Buddy is a framework-learning companion designed to help beginners learn modern web development through clear questions, guided prompting, and AI-powered explanations. Its local-first approach is designed to connect to an AI model running on the user's own device, rather than relying on a hosted AI provider.


## 📌 Overview

Learning a programming framework can mean jumping between tutorials, documentation pages, and forum posts. Framework Buddy aims to make that process more approachable by helping users ask better questions and understand answers in context.

Rather than treating AI as a tool that only generates code, Framework Buddy emphasizes *prompting as a learning skill*: provide context, ask a focused question, review the explanation, and verify the result.

The project is designed around local AI integration. When connected to a compatible local model, AI requests can be processed on the user's device. If no local model is connected, the interface may remain in preview/offline mode and AI responses may not be available.

## ❗ The Problem

- *Information overload:* Beginners often have to search through long documentation pages to find one relevant answer.
- *Unclear prompts:* Broad questions tend to produce answers that are too generic to be useful.
- *Fragmented learning:* It can be difficult to keep track of topics studied, useful explanations, and next steps.
- *Privacy concerns:* Sending code or learning questions to a cloud AI service may be unsuitable for some users.

## 💡 Our Solution

Framework Buddy brings framework exploration and structured prompting into one learning experience. The project focuses on three ideas:

1. *Guided framework learning* -  explore topics such as React, Next.js, and Tailwind CSS.
2. *Better prompting* -  use a simple framework to make questions more specific and actionable.
3. *Local-first AI* -  connect to an AI model running locally, reducing the need to send prompts and code to an external AI provider.

The goal is to help learners understand **why** a solution works, not only copy code.

## Prompting Philosophy: CLEAR

Framework Buddy uses the **CLEAR** framework as a guide for writing more useful prompts.

| Letter | Meaning | What to include |
| --- | --- | --- |
| **C** | Context | Explain what you are building and your experience level. |
| **L** | Language or framework | Name the language, library, framework, and relevant version. |
| **E** | Example | Share a small, relevant code snippet or example when useful. |
| **A** | Ask | Ask one specific question at a time. |
| **R** | Review | Ask for an explanation and verify the answer against reliable documentation. |

**Example of a clearer prompt**

> I'm a beginner building a small React task list. I'm using functional components and `useState`. Why does my list reset when I refresh the page? Explain the cause first, then suggest a beginner-friendly solution.

CLEAR is a prompting guide, not a guarantee that every AI answer will be correct.

## ✨ Features
🔍 *Framework Exploration*
- Browse available frameworks through the framework directory.
- Search by framework name, description, or topic.
- Filter frameworks using topic tags.
- Open framework cards to access related learning information.
- Visit official documentation for further study.

## 💬 AI Chat Interface
1. Select example prompts to populate the message composer.
2. Write questions about React, Next.js, Tailwind CSS, and related concepts.
3. Submit non-empty prompts and display them in the conversation interface.

## 📖 Built-in Guide
- Learn how to navigate Framework Buddy.
- Understand how to use the framework directory and chat interface.
- Review the application's available features and limitations.

## 🔌 Local AI Status
- View the local AI connection status in the sidebar.
- See the Not Connected status when no model connection has been established.

## How It Works

At a high level, the application is intended to follow this flow:

```text
User
  |
  v
Framework Buddy UI
  |
  v
Prompt input and CLEAR guidance
  |
  v
Local AI connection (for example, Ollama)
  |
  v
Model generates an explanation
  |
  v
Answer displayed in the learning interface
```


## 🛠️ Technology Stack

The project identifies the following technologies:

| Technology | Purpose |
| --- | --- |
| *Next.js* | Web application framework |
| *SQLite* | Database technology |
| *Ollama* | Intended local AI runtime |
| *Phi-3* | Intended AI model |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later, if required by the project.
- npm (included with Node.js) or the package manager used by this repository.
- [Ollama](https://ollama.com/) if the app's local AI integration uses Ollama.
- A compatible local model downloaded through the chosen runtime. 

### 1. Clone the repository

Replace the placeholder URL with your actual GitHub repository URL.

```bash
git clone https://github.com/<your-username>/framework-buddy.git
cd framework-buddy
```

### 2. Install dependencies

```bash
npm install
```

Use the package manager and lockfile already present in the repository if they differ.

### 3. Start a local model (Ollama example)

Install Ollama, then download a model supported by your machine. For example:

```bash
ollama pull qwen2.5-coder:3b
```

Start the Ollama service if it is not already running:

```bash
ollama serve
```

Model availability and hardware requirements vary. Choose a model that your computer can run comfortably.

### 4. Configure local access

If the browser app calls Ollama directly, configure Ollama's allowed origins for your development URL according to the official Ollama documentation and your operating system. For example, the development origin may be `http://localhost:3000`.

Do not assume a particular CORS setting is required until you confirm how this project connects to Ollama. Avoid exposing the local model service to public networks unless you understand and have secured that configuration.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

If the repository uses different scripts, check `package.json` and use the documented command for the project.

## Usage

1. Open Framework Buddy in your browser.
2. Explore an available framework or learning topic.
3. Write a focused question using the CLEAR prompting guide.
4. If local AI is configured, confirm that the local model is available before requesting a response.
5. Review the explanation and test any suggested code in your own development environment.
6. Verify framework-specific guidance against official documentation.
7. Save lessons or review progress if those features are available in the current build.

## Limitations

- AI-generated code and explanations may contain errors or outdated information.
- Small local models may struggle with complex reasoning or large codebases.
- Local inference speed and model quality depend on the user's hardware and selected model.
- AI features may be unavailable while the local runtime is disconnected.
- Framework Buddy is a learning aid and does not replace official documentation or careful testing.


## 📚 Official Documentation

Explore these resources to learn directly from the framework maintainers.

- Next.js Documentation
- React Learn
- Tailwind CSS Documentation
- Ollama Documentation

## Team

| Name | Role | GitHub |
| --- | --- | --- |
| [Micah Garcia] | [Role] | [@handle](https://github.com/handle) |
| [Carl John Galleto] | [Role] | [@handle](https://github.com/handle) |
| [Rheamil Nacario] | [Role] | [@handle](https://github.com/handle) |


## License

This project is intended to use the MIT License. Add a `LICENSE` file containing the license text before presenting the repository as officially licensed under MIT. (babaguhin pa ito shaaa)

## Acknowledgements

- The organizers, mentors, and participants of [AppBuildersPH Hackathon].
- The teams behind Next.js, React, Tailwind CSS, and Ollama.
- The open-source community and tools that support local AI development.

---

**Built to make prompting more intentional and framework learning more approachable—with local AI at the center.**
