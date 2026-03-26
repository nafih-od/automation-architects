import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "how-i-built-ai-automation",
    title: "How I Built AI Automation Systems for Business Operations",
    excerpt: "A deep dive into designing AI-powered automation pipelines that replace manual workflows and scale with growing business demands.",
    date: "2026-03-20",
    readTime: "8 min read",
    tags: ["AI Automation", "Machine Learning", "Backend Engineering"],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation: From Manual Processes to Intelligent Systems",
    excerpt: "Learn how AI workflow automation transforms repetitive business processes into intelligent, self-optimizing systems.",
    date: "2026-03-15",
    readTime: "6 min read",
    tags: ["AI Workflow", "Automation", "Systems Engineering"],
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Blog</h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Insights on AI engineering, machine learning systems, and automation — from an AI Systems Engineer's perspective.
          </p>
        </motion.div>

        <div className="space-y-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <Clock size={12} />
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-secondary text-muted-foreground">{tag}</span>
                  ))}
                </div>
                <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Coming soon <ArrowRight size={12} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">More articles coming soon. <Link to="/#contact" className="text-primary hover:underline">Get notified</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
