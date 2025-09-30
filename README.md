# JsonGeneratorFree

A modern, AI-powered JSON Generator tool that analyzes your source code and generates realistic mock data for API testing and development.

![JsonGeneratorFree](https://img.shields.io/badge/JsonGeneratorFree-v1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC)

## 🚀 Features

- **Code Analysis**: Automatically analyzes TypeScript, JavaScript, Python, Java, and other programming languages
- **Smart Mock Data Generation**: Generates realistic mock data based on your code structure
- **Monaco Editor Integration**: Professional code editing experience with syntax highlighting
- **Dark Theme UI**: Modern, professional interface matching JsonFormatterFree styling
- **Export Functionality**: Export generated data as JSON, with copy-to-clipboard support
- **Template Management**: Save and manage your generated templates
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **File Upload Support**: Drag & drop or upload source code files

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor (VS Code editor)
- **Icons**: Lucide React
- **State Management**: React Hooks

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd JsonGeneratorFree
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Basic Usage

1. **Input Source Code**: Paste your TypeScript, JavaScript, Python, Java, or other language code into the left panel
2. **Generate Mock Data**: Click the "Generate" button to analyze your code and create mock data
3. **Preview Results**: View the generated JSON data in the right panel
4. **Export Data**: Use the export or copy buttons to save your generated data

### Supported Code Types

- **Interfaces** (TypeScript/JavaScript)
- **Classes** (All object-oriented languages)
- **Type Definitions** (TypeScript)
- **Function Parameters** (All languages)
- **Data Models** (Any structured code)

### Example Input

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  createdAt: Date;
}

class Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  tags: string[];
}
```

### Generated Output

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 28,
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "products": [
    {
      "id": "prod_001",
      "name": "Wireless Headphones",
      "price": 99.99,
      "category": "Electronics",
      "inStock": true,
      "tags": ["wireless", "audio", "electronics"]
    }
  ]
}
```

## 🎨 Features in Detail

### Code Analysis Engine

The tool uses advanced parsing techniques to:
- Extract class and interface definitions
- Identify property types and structures
- Generate appropriate mock data based on type hints
- Handle complex nested structures
- Support multiple programming languages

### Mock Data Generators

Intelligent generators for common data types:
- **Strings**: Realistic text, names, emails, URLs
- **Numbers**: Random but sensible numeric values
- **Booleans**: Random true/false values
- **Dates**: Recent timestamps
- **IDs**: Unique identifiers
- **Arrays**: Multiple items of the same type

### UI/UX Features

- **Dark Theme**: Professional dark interface
- **Responsive Layout**: Works on all screen sizes
- **Drag & Drop**: Easy file upload
- **Syntax Highlighting**: Full language support
- **Real-time Preview**: Instant results
- **Export Options**: Multiple output formats

## 🔧 Development

### Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx      # Application header
│   ├── MainToolbar.tsx # Main action toolbar
│   ├── CodeEditor.tsx  # Monaco editor component
│   ├── PreviewPanel.tsx # Generated data preview
│   └── Sidebar.tsx     # Template management sidebar
├── lib/               # Utility libraries
│   ├── codeAnalyzer.ts # Code analysis engine
│   └── utils.ts       # General utilities
└── types/             # TypeScript type definitions
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🌟 Future Enhancements

- [ ] **AI Integration**: Advanced AI-powered code analysis
- [ ] **More Export Formats**: CSV, XML, YAML support
- [ ] **Template Library**: Pre-built templates for common use cases
- [ ] **User Authentication**: Save and share templates
- [ ] **API Integration**: Generate data for specific APIs
- [ ] **Custom Generators**: User-defined mock data patterns
- [ ] **Batch Processing**: Generate multiple datasets at once
- [ ] **Validation**: Schema validation and testing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you find this tool helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing to the project

## 🙏 Acknowledgments

- Inspired by [JsonFormatterFree](https://jsonformatterfree.com)
- Built with [Next.js](https://nextjs.org)
- Powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- Styled with [Tailwind CSS](https://tailwindcss.com)

---

**JsonGeneratorFree** - Generate realistic mock data from your source code! 🚀
