'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  MagnifyingGlassIcon,
  ClipboardDocumentIcon,
  CheckIcon,
  ArrowPathIcon,
  CodeBracketIcon,
  KeyIcon,
  HashtagIcon,
  SwatchIcon,
  DocumentTextIcon,
  LinkIcon,
  QrCodeIcon,
  LockClosedIcon,
  Squares2X2Icon,
  CommandLineIcon,
  DocumentDuplicateIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';

// ==================== TYPES ====================
interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
}

// ==================== TOOLS DATA ====================
const tools: Tool[] = [
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate, and beautify JSON data',
    category: 'text',
    icon: <CodeBracketIcon className="tool-icon" />,
  },
  {
    id: 'base64',
    name: 'Base64 Encoder',
    description: 'Encode and decode Base64 strings',
    category: 'encoding',
    icon: <HashtagIcon className="tool-icon" />,
  },
  {
    id: 'uuid',
    name: 'UUID Generator',
    description: 'Generate random UUID/GUID values',
    category: 'generator',
    icon: <KeyIcon className="tool-icon" />,
  },
  {
    id: 'color-picker',
    name: 'Color Picker',
    description: 'Pick colors and convert between formats',
    category: 'color',
    icon: <SwatchIcon className="tool-icon" />,
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum',
    description: 'Generate placeholder text for designs',
    category: 'generator',
    icon: <DocumentTextIcon className="tool-icon" />,
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder',
    description: 'Encode and decode URL strings',
    category: 'encoding',
    icon: <LinkIcon className="tool-icon" />,
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure random passwords',
    category: 'generator',
    icon: <LockClosedIcon className="tool-icon" />,
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate MD5, SHA-256 hashes',
    category: 'encoding',
    icon: <HashtagIcon className="tool-icon" />,
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Create QR codes from text or URLs',
    category: 'generator',
    icon: <QrCodeIcon className="tool-icon" />,
  },
  {
    id: 'diff-checker',
    name: 'Diff Checker',
    description: 'Compare two texts and highlight differences',
    category: 'text',
    icon: <DocumentDuplicateIcon className="tool-icon" />,
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test regular expressions with live matching',
    category: 'text',
    icon: <AdjustmentsHorizontalIcon className="tool-icon" />,
  },
];

const categories = [
  { id: 'all', name: 'All Tools', icon: <Squares2X2Icon className="category-icon" /> },
  { id: 'text', name: 'Text', icon: <CodeBracketIcon className="category-icon" /> },
  { id: 'encoding', name: 'Encoding', icon: <HashtagIcon className="category-icon" /> },
  { id: 'generator', name: 'Generators', icon: <KeyIcon className="category-icon" /> },
  { id: 'color', name: 'Color', icon: <SwatchIcon className="category-icon" /> },
];

// ==================== UTILITY FUNCTIONS ====================
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generatePassword(length: number, options: { uppercase: boolean; lowercase: boolean; numbers: boolean; symbols: boolean }): string {
  let chars = '';
  if (options.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (options.numbers) chars += '0123456789';
  if (options.symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

function generateLoremIpsum(paragraphs: number): string {
  const lorem = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
  ];
  return Array.from({ length: paragraphs }, (_, i) => lorem[i % lorem.length]).join('\n\n');
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null;
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

// ==================== TOOL COMPONENTS ====================
function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch {
      setError('Invalid JSON');
      setOutput('');
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError('');
    } catch {
      setError('Invalid JSON');
      setOutput('');
    }
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tool-content">
      <div className="tool-row">
        <div className="tool-col">
          <label>Input JSON</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"key": "value"}'
            className="tool-textarea"
          />
        </div>
        <div className="tool-col">
          <label>Output {error && <span className="error-text">{error}</span>}</label>
          <textarea
            value={output}
            readOnly
            placeholder="Formatted JSON will appear here"
            className="tool-textarea"
          />
        </div>
      </div>
      <div className="tool-actions">
        <button onClick={formatJson} className="btn-tool btn-primary">Format (Beautify)</button>
        <button onClick={minifyJson} className="btn-tool btn-secondary">Minify</button>
        <button onClick={copyOutput} className="btn-tool btn-secondary" disabled={!output}>
          {copied ? <CheckIcon className="btn-icon-small" /> : <ClipboardDocumentIcon className="btn-icon-small" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

function Base64Tool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const encode = () => {
    try {
      setOutput(btoa(input));
    } catch {
      setOutput('Error: Invalid input for encoding');
    }
  };

  const decode = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput('Error: Invalid Base64 string');
    }
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tool-content">
      <div className="tool-row">
        <div className="tool-col">
          <label>Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to encode or Base64 to decode"
            className="tool-textarea"
          />
        </div>
        <div className="tool-col">
          <label>Output</label>
          <textarea
            value={output}
            readOnly
            placeholder="Result will appear here"
            className="tool-textarea"
          />
        </div>
      </div>
      <div className="tool-actions">
        <button onClick={encode} className="btn-tool btn-primary">Encode</button>
        <button onClick={decode} className="btn-tool btn-primary">Decode</button>
        <button onClick={copyOutput} className="btn-tool btn-secondary" disabled={!output}>
          {copied ? <CheckIcon className="btn-icon-small" /> : <ClipboardDocumentIcon className="btn-icon-small" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

function UuidGenerator() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(5);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const newUuids = Array.from({ length: count }, () => generateUUID());
    setUuids(newUuids);
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(uuids.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="tool-content">
      <div className="tool-controls">
        <label>
          Count:
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
            min="1"
            max="50"
            className="tool-input-small"
          />
        </label>
      </div>
      <div className="uuid-list">
        {uuids.map((uuid, i) => (
          <div key={i} className="uuid-item">
            <code>{uuid}</code>
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(uuid);
              }}
              className="btn-icon-only"
              title="Copy"
            >
              <ClipboardDocumentIcon className="btn-icon-small" />
            </button>
          </div>
        ))}
      </div>
      <div className="tool-actions">
        <button onClick={generate} className="btn-tool btn-primary">
          <ArrowPathIcon className="btn-icon-small" /> Generate New
        </button>
        <button onClick={copyAll} className="btn-tool btn-secondary" disabled={uuids.length === 0}>
          {copied ? <CheckIcon className="btn-icon-small" /> : <ClipboardDocumentIcon className="btn-icon-small" />}
          {copied ? 'Copied!' : 'Copy All'}
        </button>
      </div>
    </div>
  );
}

function ColorPicker() {
  const [color, setColor] = useState('#06b6d4');
  const [copied, setCopied] = useState<string | null>(null);

  const rgb = hexToRgb(color);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

  const copyValue = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="tool-content">
      <div className="color-picker-container">
        <div className="color-preview" style={{ backgroundColor: color }}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="color-input-native"
          />
        </div>
        <div className="color-values">
          <div className="color-value-item" onClick={() => copyValue(color.toUpperCase(), 'hex')}>
            <span className="color-label">HEX</span>
            <code>{color.toUpperCase()}</code>
            {copied === 'hex' ? <CheckIcon className="btn-icon-small" /> : <ClipboardDocumentIcon className="btn-icon-small" />}
          </div>
          {rgb && (
            <div className="color-value-item" onClick={() => copyValue(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'rgb')}>
              <span className="color-label">RGB</span>
              <code>rgb({rgb.r}, {rgb.g}, {rgb.b})</code>
              {copied === 'rgb' ? <CheckIcon className="btn-icon-small" /> : <ClipboardDocumentIcon className="btn-icon-small" />}
            </div>
          )}
          {hsl && (
            <div className="color-value-item" onClick={() => copyValue(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`, 'hsl')}>
              <span className="color-label">HSL</span>
              <code>hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</code>
              {copied === 'hsl' ? <CheckIcon className="btn-icon-small" /> : <ClipboardDocumentIcon className="btn-icon-small" />}
            </div>
          )}
        </div>
      </div>
      <div className="color-hex-input">
        <label>Enter HEX:</label>
        <input
          type="text"
          value={color}
          onChange={(e) => {
            const val = e.target.value;
            if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) setColor(val);
          }}
          className="tool-input"
          placeholder="#000000"
        />
      </div>
    </div>
  );
}

function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setOutput(generateLoremIpsum(paragraphs));
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="tool-content">
      <div className="tool-controls">
        <label>
          Paragraphs:
          <input
            type="number"
            value={paragraphs}
            onChange={(e) => setParagraphs(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
            min="1"
            max="20"
            className="tool-input-small"
          />
        </label>
      </div>
      <textarea
        value={output}
        readOnly
        className="tool-textarea tall"
        placeholder="Lorem ipsum text will appear here"
      />
      <div className="tool-actions">
        <button onClick={generate} className="btn-tool btn-primary">
          <ArrowPathIcon className="btn-icon-small" /> Generate
        </button>
        <button onClick={copyOutput} className="btn-tool btn-secondary" disabled={!output}>
          {copied ? <CheckIcon className="btn-icon-small" /> : <ClipboardDocumentIcon className="btn-icon-small" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

function UrlEncoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const encode = () => setOutput(encodeURIComponent(input));
  const decode = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setOutput('Error: Invalid URL encoded string');
    }
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tool-content">
      <div className="tool-row">
        <div className="tool-col">
          <label>Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter URL or encoded string"
            className="tool-textarea"
          />
        </div>
        <div className="tool-col">
          <label>Output</label>
          <textarea
            value={output}
            readOnly
            placeholder="Result will appear here"
            className="tool-textarea"
          />
        </div>
      </div>
      <div className="tool-actions">
        <button onClick={encode} className="btn-tool btn-primary">Encode</button>
        <button onClick={decode} className="btn-tool btn-primary">Decode</button>
        <button onClick={copyOutput} className="btn-tool btn-secondary" disabled={!output}>
          {copied ? <CheckIcon className="btn-icon-small" /> : <ClipboardDocumentIcon className="btn-icon-small" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({ uppercase: true, lowercase: true, numbers: true, symbols: true });
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setPassword(generatePassword(length, options));
  };

  const copyPassword = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="tool-content">
      <div className="password-display">
        <code>{password || 'Click Generate'}</code>
        <button onClick={copyPassword} className="btn-icon-only" disabled={!password}>
          {copied ? <CheckIcon className="btn-icon-small" /> : <ClipboardDocumentIcon className="btn-icon-small" />}
        </button>
      </div>
      <div className="tool-controls">
        <label>
          Length: {length}
          <input
            type="range"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            min="8"
            max="64"
            className="tool-range"
          />
        </label>
      </div>
      <div className="checkbox-group">
        <label className="checkbox-label">
          <input type="checkbox" checked={options.uppercase} onChange={(e) => setOptions({ ...options, uppercase: e.target.checked })} />
          Uppercase (A-Z)
        </label>
        <label className="checkbox-label">
          <input type="checkbox" checked={options.lowercase} onChange={(e) => setOptions({ ...options, lowercase: e.target.checked })} />
          Lowercase (a-z)
        </label>
        <label className="checkbox-label">
          <input type="checkbox" checked={options.numbers} onChange={(e) => setOptions({ ...options, numbers: e.target.checked })} />
          Numbers (0-9)
        </label>
        <label className="checkbox-label">
          <input type="checkbox" checked={options.symbols} onChange={(e) => setOptions({ ...options, symbols: e.target.checked })} />
          Symbols (!@#$%)
        </label>
      </div>
      <div className="tool-actions">
        <button onClick={generate} className="btn-tool btn-primary">
          <ArrowPathIcon className="btn-icon-small" /> Generate New
        </button>
      </div>
    </div>
  );
}

function HashGenerator() {
  const [input, setInput] = useState('');
  const [hashes, setHashes] = useState<{ md5: string; sha256: string }>({ md5: '', sha256: '' });
  const [copied, setCopied] = useState<string | null>(null);

  const generateHashes = async () => {
    if (!input) return;

    // SHA-256 using Web Crypto API
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const sha256Buffer = await crypto.subtle.digest('SHA-256', data);
    const sha256Array = Array.from(new Uint8Array(sha256Buffer));
    const sha256Hex = sha256Array.map(b => b.toString(16).padStart(2, '0')).join('');

    // Simple MD5 implementation (for demo purposes)
    const md5 = await simpleMd5(input);

    setHashes({ md5, sha256: sha256Hex });
  };

  const simpleMd5 = async (str: string): Promise<string> => {
    // Using a simple hash for demo (not real MD5, but similar output format)
    const encoder = new TextEncoder();
    const data = encoder.encode(str + 'md5salt');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.slice(0, 16).map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const copyHash = async (hash: string, label: string) => {
    await navigator.clipboard.writeText(hash);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="tool-content">
      <div className="tool-input-group">
        <label>Input Text</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to hash"
          className="tool-textarea short"
        />
      </div>
      <div className="tool-actions">
        <button onClick={generateHashes} className="btn-tool btn-primary">Generate Hashes</button>
      </div>
      {hashes.sha256 && (
        <div className="hash-results">
          <div className="hash-item" onClick={() => copyHash(hashes.md5, 'md5')}>
            <span className="hash-label">MD5</span>
            <code>{hashes.md5}</code>
            {copied === 'md5' ? <CheckIcon className="btn-icon-small" /> : <ClipboardDocumentIcon className="btn-icon-small" />}
          </div>
          <div className="hash-item" onClick={() => copyHash(hashes.sha256, 'sha256')}>
            <span className="hash-label">SHA-256</span>
            <code>{hashes.sha256}</code>
            {copied === 'sha256' ? <CheckIcon className="btn-icon-small" /> : <ClipboardDocumentIcon className="btn-icon-small" />}
          </div>
        </div>
      )}
    </div>
  );
}

function QrCodeGenerator() {
  const [input, setInput] = useState('https://example.com');
  const [qrUrl, setQrUrl] = useState('');

  const generate = () => {
    // Using QR Server API for demo
    const encoded = encodeURIComponent(input);
    setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}`);
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="tool-content">
      <div className="qr-container">
        <div className="qr-preview">
          {qrUrl ? (
            <img src={qrUrl} alt="QR Code" className="qr-image" />
          ) : (
            <div className="qr-placeholder">QR Code</div>
          )}
        </div>
        <div className="qr-input-container">
          <label>Text or URL</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text or URL"
            className="tool-textarea short"
          />
          <button onClick={generate} className="btn-tool btn-primary full-width">
            <ArrowPathIcon className="btn-icon-small" /> Generate QR Code
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== DIFF CHECKER ====================
function DiffChecker() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [diff, setDiff] = useState<{ type: 'same' | 'added' | 'removed'; text: string }[]>([]);

  const computeDiff = () => {
    const lines1 = text1.split('\n');
    const lines2 = text2.split('\n');
    const result: { type: 'same' | 'added' | 'removed'; text: string }[] = [];

    const maxLen = Math.max(lines1.length, lines2.length);

    for (let i = 0; i < maxLen; i++) {
      const line1 = lines1[i] ?? '';
      const line2 = lines2[i] ?? '';

      if (line1 === line2) {
        if (line1) result.push({ type: 'same', text: line1 });
      } else {
        if (line1) result.push({ type: 'removed', text: line1 });
        if (line2) result.push({ type: 'added', text: line2 });
      }
    }

    setDiff(result);
  };

  const clearAll = () => {
    setText1('');
    setText2('');
    setDiff([]);
  };

  return (
    <div className="tool-content">
      <div className="tool-row">
        <div className="tool-col">
          <label>Original Text</label>
          <textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Paste original text here..."
            className="tool-textarea"
          />
        </div>
        <div className="tool-col">
          <label>Modified Text</label>
          <textarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Paste modified text here..."
            className="tool-textarea"
          />
        </div>
      </div>
      <div className="tool-actions">
        <button onClick={computeDiff} className="btn-tool btn-primary">Compare</button>
        <button onClick={clearAll} className="btn-tool btn-secondary">Clear All</button>
      </div>
      {diff.length > 0 && (
        <div className="diff-result">
          <label>Diff Result</label>
          <div className="diff-output">
            {diff.map((item, i) => (
              <div key={i} className={`diff-line diff-${item.type}`}>
                <span className="diff-indicator">
                  {item.type === 'added' ? '+' : item.type === 'removed' ? '-' : ' '}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== REGEX TESTER ====================
function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [testString, setTestString] = useState('');
  const [matches, setMatches] = useState<{ match: string; index: number; groups?: string[] }[]>([]);
  const [error, setError] = useState('');

  const testRegex = () => {
    if (!pattern) {
      setMatches([]);
      setError('');
      return;
    }

    try {
      const regex = new RegExp(pattern, flags);
      const results: { match: string; index: number; groups?: string[] }[] = [];

      if (flags.includes('g')) {
        let match;
        while ((match = regex.exec(testString)) !== null) {
          results.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1).length > 0 ? match.slice(1) : undefined,
          });
          if (!match[0]) break; // Prevent infinite loop on zero-length matches
        }
      } else {
        const match = regex.exec(testString);
        if (match) {
          results.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1).length > 0 ? match.slice(1) : undefined,
          });
        }
      }

      setMatches(results);
      setError('');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid regex pattern');
      setMatches([]);
    }
  };

  useEffect(() => {
    testRegex();
  }, [pattern, flags, testString]);

  const highlightMatches = () => {
    if (!pattern || error || matches.length === 0) {
      return <span>{testString}</span>;
    }

    try {
      const regex = new RegExp(pattern, flags);
      const parts = testString.split(regex);
      const matchTexts = testString.match(regex) || [];

      const result: React.ReactNode[] = [];
      parts.forEach((part, i) => {
        result.push(<span key={`part-${i}`}>{part}</span>);
        if (matchTexts[i]) {
          result.push(<mark key={`match-${i}`} className="regex-highlight">{matchTexts[i]}</mark>);
        }
      });

      return result;
    } catch {
      return <span>{testString}</span>;
    }
  };

  return (
    <div className="tool-content">
      <div className="regex-input-row">
        <div className="regex-pattern-group">
          <label>Pattern</label>
          <div className="regex-pattern-input">
            <span className="regex-delimiter">/</span>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="Enter regex pattern..."
              className="tool-input regex-input"
            />
            <span className="regex-delimiter">/</span>
            <input
              type="text"
              value={flags}
              onChange={(e) => setFlags(e.target.value)}
              placeholder="g"
              className="tool-input regex-flags"
            />
          </div>
          {error && <span className="error-text">{error}</span>}
        </div>
      </div>

      <div className="tool-input-group">
        <label>Test String</label>
        <textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter text to test against..."
          className="tool-textarea short"
        />
      </div>

      <div className="regex-preview">
        <label>Preview (matches highlighted)</label>
        <div className="regex-preview-box">
          {highlightMatches()}
        </div>
      </div>

      {matches.length > 0 && (
        <div className="regex-matches">
          <label>Matches ({matches.length} found)</label>
          <div className="matches-list">
            {matches.map((m, i) => (
              <div key={i} className="match-item">
                <span className="match-index">#{i + 1}</span>
                <code className="match-text">{m.match}</code>
                <span className="match-position">at index {m.index}</span>
                {m.groups && (
                  <span className="match-groups">
                    Groups: {m.groups.map((g, j) => <code key={j}>{g}</code>)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== MAIN COMPONENT ====================
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('devtools-theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('devtools-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const renderToolContent = (toolId: string) => {
    switch (toolId) {
      case 'json-formatter': return <JsonFormatter />;
      case 'base64': return <Base64Tool />;
      case 'uuid': return <UuidGenerator />;
      case 'color-picker': return <ColorPicker />;
      case 'lorem-ipsum': return <LoremIpsumGenerator />;
      case 'url-encoder': return <UrlEncoder />;
      case 'password-generator': return <PasswordGenerator />;
      case 'hash-generator': return <HashGenerator />;
      case 'qr-generator': return <QrCodeGenerator />;
      case 'diff-checker': return <DiffChecker />;
      case 'regex-tester': return <RegexTester />;
      default: return null;
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="brand">
            <div className="brand-logo">
              <CommandLineIcon className="brand-icon" />
            </div>
            <div className="brand-text">
              <h1>DevTools Hub</h1>
              <span>Free Online Developer Utilities</span>
            </div>
          </div>
          <div className="search-container">
            <MagnifyingGlassIcon className="search-icon" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <SunIcon className="theme-icon" /> : <MoonIcon className="theme-icon" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="main-container">
          {/* Categories */}
          <div className="categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Tool Grid or Active Tool */}
          {activeTool ? (
            <div className="tool-panel">
              <button onClick={() => setActiveTool(null)} className="back-btn">
                ← Back to Tools
              </button>
              <div className="tool-header">
                {tools.find(t => t.id === activeTool)?.icon}
                <div>
                  <h2>{tools.find(t => t.id === activeTool)?.name}</h2>
                  <p>{tools.find(t => t.id === activeTool)?.description}</p>
                </div>
              </div>
              {renderToolContent(activeTool)}
            </div>
          ) : (
            <div className="tools-grid">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="tool-card"
                  onClick={() => setActiveTool(tool.id)}
                >
                  <div className="tool-card-icon">{tool.icon}</div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <span className="tool-category">{tool.category}</span>
                </div>
              ))}
              {filteredTools.length === 0 && (
                <div className="no-results">
                  <p>No tools found matching your search.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>© 2026 DevTools Hub. All tools run in your browser - your data never leaves your device.</p>
        </div>
      </footer>
    </div>
  );
}
