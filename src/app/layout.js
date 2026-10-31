import './globals.css';

export const metadata = {
  title: 'Auditoria Pública CV',
  description: 'Sistema Inteligente de Contratação Pública',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
