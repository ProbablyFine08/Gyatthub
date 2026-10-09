# Gyatthub — Framework Buddy

**Learn frameworks. Build with confidence.**

Gyatthub is a local-AI learning companion built as a 24-hour AppBuilders project. It combines a framework directory, a chat interface backed by Ollama, a knowledge map, and a built-in guide.

## What it does

- **Explore frameworks:** Browse Next.js, React, Tailwind CSS, and Docker. Search by framework name, category, description, or topic, and filter by topic.
- **Ask the local tutor:** Send questions to an Ollama model running on your computer. The tutor is configured to explain concepts in small steps, connect them to prior concepts, and ask a check-for-understanding question.
- **View a knowledge map:** See topic tags grouped by framework and review the progress data saved by the app.
- **Read the guide:** Find usage information and links to official framework documentation.

The project is a prototype and some learning-progress features are still incomplete; see [Limitations](#limitations).

## Prompting tips: CLEAR

CLEAR is a suggested way to write focused questions; it is guidance in this README, not an automated feature of the app.

| Letter | Include |
| --- | --- |
| **C — Context** | What you are building and your experience level |
| **L — Language or framework** | The language, library, framework, and relevant version |
| **E — Example** | A small relevant code sample, when useful |
| **A — Ask** | One specific question |
| **R — Review** | Ask for an explanation and check it against reliable documentation |

For example: “I'm a beginner building a React task list with functional components and `useState`. Why does my list reset when I refresh the page? Explain the cause, then suggest a beginner-friendly solution.”

AI-generated answers can be wrong; verify important details and test suggested code.

## Requirements

- Node.js 20.9 or later and npm
- [Ollama](https://ollama.com/download) for local AI chat
- Enough memory and disk space to run the Phi-3 model locally

Without Ollama, you can still start the web app and use its framework directory and guide, but AI chat will not be available.

## Run locally

Clone this repository and install its dependencies:

```sh
git clone https://github.com/ProbablyFine08/Gyatthub.git
cd Gyatthub
npm install
```

### Prepare the Ollama model

The app requests the Ollama model named `gyatthub-tutor`. The repository's [`ollama/Modelfile`](./ollama/Modelfile) defines that model using `phi3` as its base.

1. Install Ollama and make sure its service is running.
2. Download the base model and create the app's custom model:

   ```sh
   ollama pull phi3
   ollama create gyatthub-tutor -f ./ollama/Modelfile
   ```

3. Allow the browser app's local origin to access Ollama. For local development on Windows PowerShell, set the origin before starting the Ollama service:

   ```powershell
   $env:OLLAMA_ORIGINS="http://localhost:3000"; ollama serve
   ```

   On macOS or Linux, use:

   ```sh
   OLLAMA_ORIGINS=http://localhost:3000 ollama serve
   ```

   If Ollama is already running as a background or desktop service, configure this environment variable for that service and restart it. This app calls Ollama directly from the browser, so the browser origin must be allowed. Allow only the origin you use for development; do not expose the Ollama service to untrusted networks.

### Start the app

In another terminal, from the repository directory:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The sidebar checks whether the local Ollama service responds and updates its status periodically. A “Connected” status means the service responded; it does not confirm that the `gyatthub-tutor` model is installed or that a chat request will succeed.

## How it works

The Next.js client sends chat requests from the browser to Ollama at `http://localhost:11434/api/chat`, using the `gyatthub-tutor` model. The tutor's base model, behavior, and sampling settings are defined in `ollama/Modelfile` and `src/lib/ai/ollama.js`. The frontend and Ollama must run on the same device for the default local address to work.

Learning data is stored in the browser's `localStorage` under `framework_buddy_learning_state`. It is specific to the browser and device; it is not stored in SQLite or synchronized to an account. Chat messages are held in page state and do not persist after the page is reloaded.

## Application pages

- `/` — Chat with the tutor, choose example prompts, and browse featured frameworks.
- `/explore` — Search and filter the framework directory.
- `/knowledge-map` — View topic tags grouped by framework.
- `/docs` — Read the in-app guide and open official documentation links.

## Technology and project structure

| Technology | Use in this repository |
| --- | --- |
| Next.js 16 and React 19 | Web application and client UI |
| Ollama | Local model runtime and chat API |
| Phi-3 | Base model for the `gyatthub-tutor` Ollama model |
| Browser `localStorage` | Local learning-progress data |
| Claude Code | AI-assisted development tool used for this project |

```text
ollama/Modelfile           Ollama model configuration
src/app/                   App Router pages and global styles
src/components/            Shared UI components and app shell
src/lib/ai/ollama.js       Local Ollama chat integration
src/lib/frameworks.js      Framework directory data
src/lib/metrics/store.js   Browser learning-progress storage
```

There is no application database, server-side AI proxy, or cloud AI integration configured in this repository.

## Available npm scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve a production build |

## Limitations

- Chat requires the local Ollama service, browser access to that service, and the `gyatthub-tutor` model. Local model speed and answer quality depend on the model and hardware.
- Chat history is temporary and disappears when the page reloads.
- Learning progress is stored only in the current browser's local storage.
- Progress tracking is an early implementation: the chat records framework names mentioned in prompts, while the Knowledge Map displays framework topic tags. These do not yet line up as a complete topic-by-topic learning tracker.
- The sidebar reports whether Ollama responds, not whether the configured tutor model is available.
- AI-generated explanations may be inaccurate or out of date. Verify framework-specific instructions with the official documentation and test code before relying on it.

## Official documentation

- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev/learn)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Docker Manuals](https://docs.docker.com/manuals/)
- [Ollama](https://docs.ollama.com/)

## Project team

- Micah Garcia
- Carl John Galleto
- Rheamil Nacario

## License

There is no `LICENSE` file in this repository, so no open-source license is currently declared. Add the appropriate license file before describing the project as MIT-licensed.

## Acknowledgements

- The organizers, mentors, and participants of the AppBuildersPH Hackathon.
- The teams behind Next.js, React, Tailwind CSS, Docker, Ollama, and Phi-3.
- The open-source community and tools that support local AI development.
