# Bricklayer

This is the site repository for [Bricklayer](https://bricklayer-ysws.vercel.app), a potential YSWS idea.

You Ship: a game built in Roblox, We Ship: LEGO® bricks and more!

## Getting Started

This is a [React](https://react.dev) + [TypeScript](https://typescriptlang.org) project built with [Vite](https://vite.dev) and [MDX](https://mdxjs.com).

### Prerequisites

- Node.js (v22.21.0 or higher)
- npm or yarn package manager

### Installation

Clone the repository:
```console
$ git clone https://github.com/junyali/bricklayer-ysws.git
$ cd bricklayer-ysws
```

Install dependencies:
```console
$ npm install
```

Run the development server:
```console
$ npm run dev
```

The site will be available at `https://localhost:5173`

## Deployment (Vercel)

Install Vercel CLI
```console
$ npm install -g vercel
```

Deploy:
```console
$ vercel
```

## Extras

This project uses GitHub API to fetch the latest commit information of the main branch in this repository. A PAT is not required unless you want to avoid rate limiting:

Create a `.env` file in the root directory:

```env
GITHUB_API_KEY=your_github_pat
```
