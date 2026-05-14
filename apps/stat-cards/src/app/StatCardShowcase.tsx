import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  Heart,
  Download,
  Star,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  CreditCard,
  MessageSquare,
  FileText,
  Target,
} from 'lucide-react';

export function StatCardShowcase() {
  return (
    <div className="flex flex-col gap-12">
          {/* Row 1: Simple with Icon */}
          <div>
            <h2 className="mb-4 text-[22px] font-medium leading-tight text-foreground">Simple with Icon</h2>
            <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-medium leading-4 text-muted-foreground">Total Users</p>
                  <p className="mt-2 text-[28px] font-medium leading-tight text-foreground">12,543</p>
                </div>
                <div className="rounded-full bg-svc-brand-primary-light-max p-3">
                  <Users className="size-6 text-svc-brand-primary" />
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-medium leading-4 text-muted-foreground">New Orders</p>
                  <p className="mt-2 text-[28px] font-medium leading-tight text-foreground">8,234</p>
                </div>
                <div className="rounded-full bg-svc-success-light-max p-3">
                  <ShoppingCart className="w-6 h-6 text-svc-success" />
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-medium leading-4 text-muted-foreground">Revenue</p>
                  <p className="mt-2 text-[28px] font-medium leading-tight text-foreground">$45,231</p>
                </div>
                <div className="rounded-full bg-svc-lavender-light-max p-3">
                  <DollarSign className="w-6 h-6 text-svc-lavender" />
                </div>
              </div>
            </div>
            </div>
            <div className="border-b border-border mt-8"></div>
          </div>

          {/* Row 2: With Trend Indicator */}
          <div>
            <h2 className="mb-4 text-[22px] font-medium leading-tight text-foreground">With Trend Indicator</h2>
            <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[13px] font-medium leading-4 text-muted-foreground">Page Views</p>
                  <p className="mt-2 text-[28px] font-medium leading-tight text-foreground">84,392</p>
                </div>
                <div className="rounded-full bg-svc-brand-primary-light-max p-3">
                  <Activity className="size-6 text-svc-brand-primary" />
                </div>
              </div>
              <div className="flex items-center text-svc-success text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+12.5% from last month</span>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[13px] font-medium leading-4 text-muted-foreground">Conversion Rate</p>
                  <p className="mt-2 text-[28px] font-medium leading-tight text-foreground">3.24%</p>
                </div>
                <div className="rounded-full bg-svc-warning-light-max p-3">
                  <Target className="w-6 h-6 text-svc-warning" />
                </div>
              </div>
              <div className="flex items-center text-svc-error text-sm">
                <TrendingDown className="w-4 h-4 mr-1" />
                <span>-2.1% from last week</span>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[13px] font-medium leading-4 text-muted-foreground">Messages</p>
                  <p className="mt-2 text-[28px] font-medium leading-tight text-foreground">1,423</p>
                </div>
                <div className="rounded-full bg-svc-success-light-max p-3">
                  <MessageSquare className="w-6 h-6 text-svc-success" />
                </div>
              </div>
              <div className="flex items-center text-svc-success text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+8.3% from yesterday</span>
              </div>
            </div>
            </div>
            <div className="border-b border-border mt-8"></div>
          </div>

          {/* Row 3: Minimal with Border */}
          <div>
            <h2 className="mb-4 text-[22px] font-medium leading-tight text-foreground">Minimal with Border</h2>
            <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg border-2 border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-medium leading-4 text-muted-foreground">Favorites</p>
                  <p className="mt-2 text-[28px] font-medium leading-tight text-foreground">3,421</p>
                </div>
                <Heart className="w-6 h-6 text-svc-error fill-svc-error" />
              </div>
            </div>
            <div className="rounded-lg border-2 border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-medium leading-4 text-muted-foreground">Downloads</p>
                  <p className="mt-2 text-[28px] font-medium leading-tight text-foreground">12,851</p>
                </div>
                <Download className="w-6 h-6 text-svc-info" />
              </div>
            </div>
            <div className="rounded-lg border-2 border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-medium leading-4 text-muted-foreground">Documents</p>
                  <p className="mt-2 text-[28px] font-medium leading-tight text-foreground">567</p>
                </div>
                <FileText className="w-6 h-6 text-svc-lavender" />
              </div>
            </div>
            </div>
            <div className="border-b border-border mt-8"></div>
          </div>

          {/* Row 4: With Progress Bar */}
          <div>
            <h2 className="mb-4 text-[22px] font-medium leading-tight text-foreground">With Progress Bar</h2>
            <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Sales Goal</p>
                <DollarSign className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="mb-3 text-[28px] font-medium leading-tight text-foreground">$68,742</p>
              <div className="w-full bg-svc-track rounded-full h-2">
                <div className="bg-svc-info h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="text-[12px] leading-4 text-muted-foreground mt-2">68% of goal ($100,000)</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Project Progress</p>
                <Package className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="mb-3 text-[28px] font-medium leading-tight text-foreground">42/50</p>
              <div className="w-full bg-svc-track rounded-full h-2">
                <div className="bg-svc-success h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
              <p className="text-[12px] leading-4 text-muted-foreground mt-2">84% of tasks completed</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Storage Used</p>
                <Download className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="mb-3 text-[28px] font-medium leading-tight text-foreground">7.2 GB</p>
              <div className="w-full bg-svc-track rounded-full h-2">
                <div className="bg-svc-warning h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
              <p className="text-[12px] leading-4 text-muted-foreground mt-2">72% of 10 GB limit</p>
            </div>
            </div>
            <div className="border-b border-border mt-8"></div>
          </div>

          {/* Row 5: With Rating */}
          <div>
            <h2 className="mb-4 text-[22px] font-medium leading-tight text-foreground">With Rating</h2>
            <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Customer Rating</p>
                <div className="rounded-full bg-svc-warning-light-max p-3">
                  <Star className="w-5 h-5 text-svc-warning fill-svc-warning" />
                </div>
              </div>
              <p className="text-[28px] font-medium leading-tight text-foreground">4.8</p>
              <div className="flex items-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= 5 ? 'text-svc-warning fill-svc-warning' : 'text-muted-foreground/50'}`}
                  />
                ))}
                <span className="text-[13px] font-medium leading-4 text-muted-foreground ml-2">(2,341 reviews)</span>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Product Rating</p>
                <div className="rounded-full bg-svc-warning-light-max p-3">
                  <Star className="w-5 h-5 text-svc-warning fill-svc-warning" />
                </div>
              </div>
              <p className="text-[28px] font-medium leading-tight text-foreground">4.2</p>
              <div className="flex items-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= 4 ? 'text-svc-warning fill-svc-warning' : 'text-muted-foreground/50'}`}
                  />
                ))}
                <span className="text-[13px] font-medium leading-4 text-muted-foreground ml-2">(892 reviews)</span>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Service Rating</p>
                <div className="rounded-full bg-svc-warning-light-max p-3">
                  <Star className="w-5 h-5 text-svc-warning fill-svc-warning" />
                </div>
              </div>
              <p className="text-[28px] font-medium leading-tight text-foreground">4.9</p>
              <div className="flex items-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= 5 ? 'text-svc-warning fill-svc-warning' : 'text-muted-foreground/50'}`}
                  />
                ))}
                <span className="text-[13px] font-medium leading-4 text-muted-foreground ml-2">(5,124 reviews)</span>
              </div>
            </div>
            </div>
            <div className="border-b border-border mt-8"></div>
          </div>

          {/* Row 6: Compact Layout */}
          <div>
            <h2 className="mb-4 text-[22px] font-medium leading-tight text-foreground">Compact Layout</h2>
            <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-4 shadow-svc-card">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-svc-info-light-max p-3">
                  <Package className="w-6 h-6 text-svc-info" />
                </div>
                <div>
                  <p className="text-[12px] leading-4 text-muted-foreground">Products</p>
                  <p className="text-[24px] font-medium leading-tight text-foreground">234</p>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-svc-success text-sm flex items-center">
                    <ArrowUpRight className="w-3 h-3" />
                    5.2%
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 shadow-svc-card">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-svc-lavender-light-max p-3">
                  <Users className="w-6 h-6 text-svc-lavender" />
                </div>
                <div>
                  <p className="text-[12px] leading-4 text-muted-foreground">Active Users</p>
                  <p className="text-[24px] font-medium leading-tight text-foreground">1,842</p>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-svc-success text-sm flex items-center">
                    <ArrowUpRight className="w-3 h-3" />
                    12.8%
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 shadow-svc-card">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-svc-brand-primary-light-max p-3">
                  <ShoppingCart className="w-6 h-6 text-svc-brand-primary" />
                </div>
                <div>
                  <p className="text-[12px] leading-4 text-muted-foreground">Cart Value</p>
                  <p className="text-[24px] font-medium leading-tight text-foreground">$4.2K</p>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-svc-error text-sm flex items-center">
                    <ArrowDownRight className="w-3 h-3" />
                    2.4%
                  </span>
                </div>
              </div>
            </div>
            </div>
            <div className="border-b border-border mt-8"></div>
          </div>

          {/* Row 7: With Multiple Stats */}
          <div>
            <h2 className="mb-4 text-[22px] font-medium leading-tight text-foreground">With Multiple Stats</h2>
            <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <p className="text-[13px] font-medium leading-4 text-muted-foreground mb-4">Payment Overview</p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[28px] font-medium leading-tight text-foreground">$12,423</p>
                <CreditCard className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-[12px] leading-4 text-muted-foreground">Pending</p>
                  <p className="text-lg">$2,340</p>
                </div>
                <div>
                  <p className="text-[12px] leading-4 text-muted-foreground">Completed</p>
                  <p className="text-lg">$10,083</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <p className="text-[13px] font-medium leading-4 text-muted-foreground mb-4">Order Summary</p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[28px] font-medium leading-tight text-foreground">2,847</p>
                <ShoppingCart className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-[12px] leading-4 text-muted-foreground">Processing</p>
                  <p className="text-lg">342</p>
                </div>
                <div>
                  <p className="text-[12px] leading-4 text-muted-foreground">Delivered</p>
                  <p className="text-lg">2,505</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <p className="text-[13px] font-medium leading-4 text-muted-foreground mb-4">User Activity</p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[28px] font-medium leading-tight text-foreground">8,934</p>
                <Users className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-[12px] leading-4 text-muted-foreground">Online</p>
                  <p className="text-lg">1,234</p>
                </div>
                <div>
                  <p className="text-[12px] leading-4 text-muted-foreground">Offline</p>
                  <p className="text-lg">7,700</p>
                </div>
              </div>
            </div>
            </div>
            <div className="border-b border-border mt-8"></div>
          </div>

          {/* Row 8: With Percentage Circle */}
          <div>
            <h2 className="mb-4 text-[22px] font-medium leading-tight text-foreground">With Percentage Circle</h2>
            <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Completion Rate</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted-foreground/20"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - 0.76)}`}
                      className="text-svc-info"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-bold">76%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">4,234 of 5,571</p>
                  <p className="text-[12px] leading-4 text-muted-foreground mt-1">tasks completed</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Success Rate</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted-foreground/20"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - 0.92)}`}
                      className="text-svc-success"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-bold">92%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">920 of 1,000</p>
                  <p className="text-[12px] leading-4 text-muted-foreground mt-1">goals achieved</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Engagement Rate</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted-foreground/20"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - 0.54)}`}
                      className="text-svc-lavender"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-bold">54%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">2,160 of 4,000</p>
                  <p className="text-[12px] leading-4 text-muted-foreground mt-1">users engaged</p>
                </div>
              </div>
            </div>
            </div>
            <div className="border-b border-border mt-8"></div>
          </div>

          {/* Row 9: Time-based Stat */}
          <div>
            <h2 className="mb-4 text-[22px] font-medium leading-tight text-foreground">Time-based Stat</h2>
            <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Response Time</p>
                <Activity className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-[28px] font-medium leading-tight text-foreground">2.4</p>
                <span className="text-muted-foreground">hours</span>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">vs target (4h)</span>
                  <span className="text-svc-success flex items-center">
                    <ArrowDownRight className="w-4 h-4 mr-1" />
                    40% faster
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Load Time</p>
                <Activity className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-[28px] font-medium leading-tight text-foreground">1.8</p>
                <span className="text-muted-foreground">seconds</span>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">vs target (2s)</span>
                  <span className="text-svc-success flex items-center">
                    <ArrowDownRight className="w-4 h-4 mr-1" />
                    10% faster
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Session Duration</p>
                <Activity className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-[28px] font-medium leading-tight text-foreground">8.2</p>
                <span className="text-muted-foreground">minutes</span>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">vs target (6m)</span>
                  <span className="text-svc-success flex items-center">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    37% longer
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Row 10: All Features Combined */}
          <div>
            <h2 className="mb-4 text-[22px] font-medium leading-tight text-foreground">All Features Combined</h2>
            <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg border-2 border-svc-info bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Total Revenue</p>
                <div className="rounded-full bg-svc-brand-primary-light-max p-3">
                  <DollarSign className="size-6 text-svc-brand-primary" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-[28px] font-medium leading-tight text-foreground">$234,567</p>
              </div>
              <div className="flex items-center text-svc-success text-sm mb-4">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+24.5% from last month</span>
              </div>

              <div className="w-full bg-svc-track rounded-full h-2 mb-2">
                <div className="bg-svc-info h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <p className="text-[12px] leading-4 text-muted-foreground mb-4">78% of annual goal ($300K)</p>

              <div className="mb-4 flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="6" fill="none" className="text-muted-foreground/20" />
                    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="6" fill="none" strokeDasharray={`${2 * Math.PI * 26}`} strokeDashoffset={`${2 * Math.PI * 26 * (1 - 0.82)}`} className="text-svc-success" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold">82%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-3 h-3 ${star <= 4 ? 'text-svc-warning fill-svc-warning' : 'text-muted-foreground/50'}`} />
                    ))}
                    <span className="text-[12px] leading-4 text-muted-foreground ml-1">4.8</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
                <div>
                  <p className="text-[12px] leading-4 text-muted-foreground">Active</p>
                  <p className="text-base">1,234</p>
                </div>
                <div>
                  <p className="text-[12px] leading-4 text-muted-foreground">Completed</p>
                  <p className="text-base">8,901</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-2 border-svc-lavender bg-card p-6 shadow-svc-card">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">User Engagement</p>
                <div className="rounded-full bg-svc-lavender-light-max p-3">
                  <Users className="w-6 h-6 text-svc-lavender" />
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-[28px] font-medium leading-tight text-foreground">45,892</p>
              </div>
              <div className="flex items-center text-svc-success text-sm mb-4">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+18.2% this week</span>
              </div>

              <div className="space-y-2 mb-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Active Sessions</span>
                    <span className="text-xs">3,421</span>
                  </div>
                  <div className="w-full bg-svc-track rounded-full h-2">
                    <div className="bg-svc-lavender h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Page Views</span>
                    <span className="text-xs">12,543</span>
                  </div>
                  <div className="w-full bg-svc-track rounded-full h-2">
                    <div className="bg-svc-info h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12 transform -rotate-90">
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="none" className="text-muted-foreground/20" />
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray={`${2 * Math.PI * 20}`} strokeDashoffset={`${2 * Math.PI * 20 * (1 - 0.64)}`} className="text-svc-lavender" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold">64%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Retention</p>
                    <p className="text-sm font-semibold">6,401/10K</p>
                  </div>
                </div>
                <div className="text-right">
                  <Heart className="w-5 h-5 text-svc-error fill-svc-error mb-1" />
                  <p className="text-xs text-muted-foreground">2,341</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-border pt-4">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">New</p>
                  <p className="text-sm font-semibold">892</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Return</p>
                  <p className="text-sm font-semibold">1,234</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Loyal</p>
                  <p className="text-sm font-semibold">543</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-2 border-svc-success bg-card p-6 shadow-svc-card">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[13px] font-medium leading-4 text-muted-foreground">Performance Metrics</p>
                <div className="rounded-full bg-svc-success-light-max p-3">
                  <Activity className="w-6 h-6 text-svc-success" />
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[28px] font-medium leading-tight text-foreground">98.7%</p>
                  <div className="flex items-center text-svc-success text-xs mt-1">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    <span>+2.3% uptime</span>
                  </div>
                </div>
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="6" fill="none" className="text-muted-foreground/20" />
                    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="6" fill="none" strokeDasharray={`${2 * Math.PI * 26}`} strokeDashoffset={`${2 * Math.PI * 26 * (1 - 0.987)}`} className="text-svc-success" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold">99%</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 space-y-2">
                <div className="flex items-center justify-between p-2 bg-svc-info-light-max rounded">
                  <span className="text-xs text-muted-foreground">Avg Response</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">1.2s</span>
                    <ArrowDownRight className="w-3 h-3 text-svc-success" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-svc-lavender-light-max rounded">
                  <span className="text-xs text-muted-foreground">Throughput</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">5.4K/s</span>
                    <ArrowUpRight className="w-3 h-3 text-svc-success" />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">CPU Usage</span>
                  <span className="text-xs">42%</span>
                </div>
                <div className="w-full bg-svc-track rounded-full h-2">
                  <div className="bg-svc-success h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-3 h-3 ${star <= 5 ? 'text-svc-warning fill-svc-warning' : 'text-muted-foreground/50'}`} />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">2,341 ops</span>
                </div>
              </div>
            </div>
            </div>
          </div>
    </div>
  );
}
