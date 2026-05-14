export default function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-8">Card Border Treatment Showcase</h1>

        {/* Drop Shadows */}
        <section className="mb-12">
          <h2 className="mb-6">Drop Shadows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="mb-2">Subtle Shadow</h3>
              <p className="text-muted-foreground">Minimal depth with soft edges</p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="mb-2">Medium Shadow</h3>
              <p className="text-muted-foreground">Balanced elevation effect</p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="mb-2">Large Shadow</h3>
              <p className="text-muted-foreground">Strong depth perception</p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-xl">
              <h3 className="mb-2">Extra Large Shadow</h3>
              <p className="text-muted-foreground">Maximum elevation</p>
            </div>
          </div>
        </section>

        {/* Colored Shadows */}
        <section className="mb-12">
          <h2 className="mb-6">Colored Shadows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6" style={{ boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)' }}>
              <h3 className="mb-2">Blue Shadow</h3>
              <p className="text-muted-foreground">Calming and professional</p>
            </div>

            <div className="bg-card rounded-lg p-6" style={{ boxShadow: '0 4px 16px rgba(236, 72, 153, 0.3)' }}>
              <h3 className="mb-2">Pink Shadow</h3>
              <p className="text-muted-foreground">Playful and vibrant</p>
            </div>

            <div className="bg-card rounded-lg p-6" style={{ boxShadow: '0 4px 16px rgba(168, 85, 247, 0.3)' }}>
              <h3 className="mb-2">Purple Shadow</h3>
              <p className="text-muted-foreground">Creative and elegant</p>
            </div>

            <div className="bg-card rounded-lg p-6" style={{ boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)' }}>
              <h3 className="mb-2">Green Shadow</h3>
              <p className="text-muted-foreground">Fresh and positive</p>
            </div>
          </div>
        </section>

        {/* Solid Borders */}
        <section className="mb-12">
          <h2 className="mb-6">Solid Borders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="mb-2">Thin Border</h3>
              <p className="text-muted-foreground">Clean and minimal</p>
            </div>

            <div className="bg-card rounded-lg p-6 border-2 border-border">
              <h3 className="mb-2">Medium Border</h3>
              <p className="text-muted-foreground">Defined structure</p>
            </div>

            <div className="bg-card rounded-lg p-6 border-4 border-border">
              <h3 className="mb-2">Thick Border</h3>
              <p className="text-muted-foreground">Bold and strong</p>
            </div>

            <div className="bg-card rounded-lg p-6 border-2 border-primary">
              <h3 className="mb-2">Accent Border</h3>
              <p className="text-muted-foreground">Highlighted emphasis</p>
            </div>
          </div>
        </section>

        {/* Gradient Borders */}
        <section className="mb-12">
          <h2 className="mb-6">Gradient Borders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 relative" style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #3b82f6, #8b5cf6) border-box',
              border: '2px solid transparent'
            }}>
              <h3 className="mb-2">Blue-Purple Gradient</h3>
              <p className="text-muted-foreground">Smooth color transition</p>
            </div>

            <div className="bg-card rounded-lg p-6 relative" style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #ec4899, #f59e0b) border-box',
              border: '2px solid transparent'
            }}>
              <h3 className="mb-2">Pink-Orange Gradient</h3>
              <p className="text-muted-foreground">Warm and energetic</p>
            </div>

            <div className="bg-card rounded-lg p-6 relative" style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea, #764ba2, #f093fb) border-box',
              border: '2px solid transparent'
            }}>
              <h3 className="mb-2">Multi-Color Gradient</h3>
              <p className="text-muted-foreground">Complex and dynamic</p>
            </div>

            <div className="bg-card rounded-lg p-6 relative" style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(to bottom right, #10b981, #3b82f6) border-box',
              border: '3px solid transparent'
            }}>
              <h3 className="mb-2">Green-Blue Diagonal</h3>
              <p className="text-muted-foreground">Directional emphasis</p>
            </div>
          </div>
        </section>

        {/* Glow Effects */}
        <section className="mb-12">
          <h2 className="mb-6">Glow Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border border-blue-500" style={{
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
            }}>
              <h3 className="mb-2">Blue Glow</h3>
              <p className="text-muted-foreground">Neon-like effect</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-purple-500" style={{
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
            }}>
              <h3 className="mb-2">Purple Glow</h3>
              <p className="text-muted-foreground">Mystical appearance</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-pink-500" style={{
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)'
            }}>
              <h3 className="mb-2">Pink Glow</h3>
              <p className="text-muted-foreground">Vibrant and bold</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-emerald-500" style={{
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)'
            }}>
              <h3 className="mb-2">Emerald Glow</h3>
              <p className="text-muted-foreground">Fresh and modern</p>
            </div>
          </div>
        </section>

        {/* 3D Effects */}
        <section className="mb-12">
          <h2 className="mb-6">3D Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6" style={{
              boxShadow: '0 8px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <h3 className="mb-2">Raised Card</h3>
              <p className="text-muted-foreground">Lifted appearance</p>
            </div>

            <div className="bg-card rounded-lg p-6" style={{
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 className="mb-2">Inset Card</h3>
              <p className="text-muted-foreground">Pressed-in effect</p>
            </div>

            <div className="bg-card rounded-lg p-6 border-b-4 border-r-4 border-primary">
              <h3 className="mb-2">Bottom-Right Depth</h3>
              <p className="text-muted-foreground">Asymmetric dimension</p>
            </div>

            <div className="bg-card rounded-lg p-6" style={{
              boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.1)',
              border: '2px solid rgba(0, 0, 0, 0.1)'
            }}>
              <h3 className="mb-2">Brutalist Style</h3>
              <p className="text-muted-foreground">Bold and geometric</p>
            </div>
          </div>
        </section>

        {/* Special Styles */}
        <section className="mb-12">
          <h2 className="mb-6">Special Border Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border-2 border-dashed border-border">
              <h3 className="mb-2">Dashed Border</h3>
              <p className="text-muted-foreground">Informal and friendly</p>
            </div>

            <div className="bg-card rounded-lg p-6 border-2 border-dotted border-border">
              <h3 className="mb-2">Dotted Border</h3>
              <p className="text-muted-foreground">Playful pattern</p>
            </div>

            <div className="bg-card rounded-lg p-6 border-4 border-double border-border">
              <h3 className="mb-2">Double Border</h3>
              <p className="text-muted-foreground">Classic elegance</p>
            </div>

            <div className="bg-card rounded-lg p-6 border-l-4 border-primary">
              <h3 className="mb-2">Left Accent</h3>
              <p className="text-muted-foreground">Directional highlight</p>
            </div>
          </div>
        </section>

        {/* Combined Effects */}
        <section className="mb-12">
          <h2 className="mb-6">Combined Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border shadow-lg">
              <h3 className="mb-2">Border + Shadow</h3>
              <p className="text-muted-foreground">Layered depth</p>
            </div>

            <div className="bg-card rounded-lg p-6 border-2 border-primary shadow-md" style={{
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
            }}>
              <h3 className="mb-2">Colored Border + Matching Shadow</h3>
              <p className="text-muted-foreground">Cohesive styling</p>
            </div>

            <div className="bg-gradient-to-br from-card to-muted rounded-lg p-6 border border-border shadow-md">
              <h3 className="mb-2">Gradient Background + Border</h3>
              <p className="text-muted-foreground">Rich composition</p>
            </div>

            <div className="bg-card rounded-lg p-6 border-2 border-dashed border-primary shadow-sm" style={{
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)'
            }}>
              <h3 className="mb-2">Dashed Border + Glow</h3>
              <p className="text-muted-foreground">Unique combination</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}