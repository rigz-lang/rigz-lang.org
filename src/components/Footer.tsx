import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { ThemeToggle } from "./theme";

const logoSize = 24;

export default function Footer() {
  return (
    <footer className="mt-16 border-t px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6">
        <div>
          <p className="text-xl font-semibold mb-2">rigz</p>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">Blog</Link>
            </li>
            <li>
              <a
                href="https://docs.rigz-lang.org/"
                target="_blank"
                rel="noopener"
                className="hover:underline"
              >
                Documentation
                <ExternalLink className="w-4 h-4 inline ml-2" />
              </a>
            </li>
            <li>
              <a
                href="https://repl.rigz-lang.org/"
                target="_blank"
                rel="noopener"
                className="hover:underline text-green-600 font-medium"
              >
                Try Rigz
                <ExternalLink className="w-4 h-4 inline ml-2" />
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <ThemeToggle />
          <p className="font-medium mb-2 text-center block">Connect</p>
          <ul className="flex gap-4 items-center">
            <li>
              <a
                href="https://gitlab.com/rigz_lang"
                target="_blank"
                rel="noopener"
                aria-label="GitLab"
              >
                <svg role="img" height={logoSize} width={logoSize} fill="#FC6D26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>GitLab</title>
                  <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rigz-lang"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <svg role="img" height={logoSize} width={logoSize} fill="#181717" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="dark:fill-white">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
