import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
    return (
        <div className="space-y-8 animate-fade-in">
            <SEO
                title="블로그"
                description="배당주 투자의 기초부터 심화 전략까지, 현명한 투자자가 되기 위한 금융 지식을 나눕니다."
                url="/blog"
            />

            <div className="text-center space-y-4 py-8">
                <h1 className="text-3xl font-bold text-slate-800">금융 지식 창고</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    배당주 투자의 기초부터 은퇴를 위한 전략까지.<br className="hidden sm:block" />
                    현명한 투자자가 되기 위한 다양한 이야기를 만나보세요.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition duration-300 flex flex-col h-full overflow-hidden group"
                    >
                        <div className="p-6 flex-grow flex flex-col">
                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                <Calendar className="w-3 h-3" />
                                <span>{post.date}</span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span>{post.author}</span>
                            </div>

                            <Link to={`/blog/${post.slug}`} className="block group-hover:text-emerald-600 transition-colors">
                                <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="mt-auto pt-4 border-t border-slate-100">
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                                >
                                    더 읽어보기 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
