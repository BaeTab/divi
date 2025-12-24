import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, User } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        if (!post) {
            navigate('/blog');
        }
    }, [post, navigate]);

    if (!post) return null;

    return (
        <article className="max-w-3xl mx-auto animate-fade-in">
            <SEO
                title={post.title}
                description={post.excerpt}
                url={`/blog/${post.slug}`}
                type="article"
                author={post.author}
                publishedTime={post.date}
            />

            {/* Header */}
            <div className="mb-8">
                <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-emerald-600 mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    목록으로 돌아가기
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center gap-4 text-slate-500 text-sm border-b border-slate-200 pb-6">
                    <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div
                className="blog-content text-slate-800 leading-relaxed mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Footer / Share (Mock) */}
            <div className="border-t border-slate-200 pt-8 mt-12">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-slate-800">이 글이 도움이 되셨나요?</h3>
                    <button
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-sm font-medium"
                        onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            alert('링크가 복사되었습니다!');
                        }}
                    >
                        <Share2 className="w-4 h-4" />
                        공유하기
                    </button>
                </div>
            </div>
        </article>
    );
}
