<template><div><h1 id="主机状态" tabindex="-1"><a class="header-anchor" href="#主机状态"><span>主机状态</span></a></h1>
<h2 id="top命令-查看资源占用" tabindex="-1"><a class="header-anchor" href="#top命令-查看资源占用"><span>top命令:查看资源占用</span></a></h2>
<p>通过<code v-pre>top</code>查看CPU、内存使用情况，默认5秒刷新一次，语法：<br>
<code v-pre>top</code><br>
直接输入即可，按<code v-pre>q</code>或<code v-pre>ctrl c</code>退出</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ top</span>
<span class="line">top - 10:39:14 up 18 min,  2 users,  load average: 0.00, 0.06, 0.20</span>
<span class="line">Tasks: 189 total,   1 running, 188 sleeping,   0 stopped,   0 zombie</span>
<span class="line">%Cpu(s):  0.0 us,  0.0 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span>
<span class="line">KiB Mem :   995892 total,    66948 free,   569504 used,   359440 buff/cache</span>
<span class="line">KiB Swap:  2098172 total,  2062580 free,    35592 used.   216160 avail Mem </span>
<span class="line"></span>
<span class="line">   PID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND                      </span>
<span class="line">  7054 root      20   0  573824  12192   1020 S  6.2  1.2   0:00.59 tuned                        </span>
<span class="line">  8911 miracles  20   0  162012   2192   1544 R  6.2  0.2   0:00.01 top                          </span>
<span class="line">     1 root      20   0  193804   4316   2448 S  0.0  0.4   0:03.75 systemd                      </span>
<span class="line">     2 root      20   0       0      0      0 S  0.0  0.0   0:00.00 kthreadd                     </span>
<span class="line">     3 root      20   0       0      0      0 S  0.0  0.0   0:00.26 ksoftirqd/0                  </span>
<span class="line">     5 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 kworker/0:0H                 </span>
<span class="line">     7 root      rt   0       0      0      0 S  0.0  0.0   0:00.00 migration/0                  </span>
<span class="line">     8 root      20   0       0      0      0 S  0.0  0.0   0:00.00 rcu_bh                       </span>
<span class="line">     9 root      20   0       0      0      0 S  0.0  0.0   0:01.08 rcu_sched                    </span>
<span class="line">    10 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 lru-add-drain                </span>
<span class="line">    11 root      rt   0       0      0      0 S  0.0  0.0   0:00.01 watchdog/0                   </span>
<span class="line">    13 root      20   0       0      0      0 S  0.0  0.0   0:00.00 kdevtmpfs                    </span>
<span class="line">    14 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 netns                        </span>
<span class="line">    15 root      20   0       0      0      0 S  0.0  0.0   0:00.00 khungtaskd                   </span>
<span class="line">    16 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 writeback                    </span>
<span class="line">    17 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 kintegrityd                  </span>
<span class="line">    18 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 bioset                       </span>
<span class="line">    19 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 bioset                       </span>
<span class="line">    20 root       0 -20       0      0      0 S  0.0  0.0   0:00.00 bioset</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">解释</p>
<ul>
<li>第一行：
<ul>
<li><code v-pre>top</code>：命令名称</li>
<li><code v-pre>10:39:14</code>：当前系统时间</li>
<li><code v-pre>up 18 min</code>：启动了1分钟</li>
<li><code v-pre>2 users</code>：2个用户登录</li>
<li><code v-pre>load average: 0.00, 0.06, 0.20</code>：1、5、15分钟负载</li>
</ul>
</li>
<li>第二行
<ul>
<li><code v-pre>Tasks: 189 total</code>：189个进程</li>
<li><code v-pre>1 running</code>：1个进程在运行</li>
<li><code v-pre>188 sleeping</code>：188个进程休眠</li>
<li><code v-pre>0 stopped</code>：0个停止进程</li>
<li><code v-pre>0 zombie</code>：0个僵尸进程</li>
</ul>
</li>
<li>第三行
<ul>
<li><code v-pre>%Cpu(s)</code>：CPU使用率</li>
<li><code v-pre>0.0 us</code>：用户CPU使用率为0.0%</li>
<li><code v-pre> 0.0 sy</code>：系统CPU使用率为0.0%</li>
<li><code v-pre>0.0 ni</code>：高优先级进程占用CPU时间百分比为0.0%</li>
<li><code v-pre>100.0 id</code>：空闲CPU率为100.0%</li>
<li><code v-pre>0.0 wa</code>：IO等待CPU占用率为0.0%</li>
<li><code v-pre>0.0 hi</code>：CPU硬件中断率为0.0%</li>
<li><code v-pre>0.0 si</code>：CPU软件中断率为0.0%</li>
<li><code v-pre>0.0 st</code>：强制等待占用CPU率</li>
</ul>
</li>
<li>第四行：
<ul>
<li><code v-pre>KiB Mem</code>：物理内存</li>
<li><code v-pre>total</code>：总量</li>
<li><code v-pre>free</code>：空闲</li>
<li><code v-pre>used</code>：使用</li>
<li><code v-pre>buff/cache</code>：buff/cache占用</li>
</ul>
</li>
<li>第五行：
<ul>
<li><code v-pre>KiB Swap</code>：虚拟内存（交换空间）</li>
<li><code v-pre>total</code>：总量</li>
<li><code v-pre>free</code>：空闲</li>
<li><code v-pre>used</code>：使用</li>
<li><code v-pre>buff/cache</code>：buff/cache占用</li>
</ul>
</li>
</ul>
</div>
<h3 id="top命令内容详解" tabindex="-1"><a class="header-anchor" href="#top命令内容详解"><span>top命令内容详解</span></a></h3>
<ul>
<li>PID：进程id</li>
<li>USER：进程所属用户</li>
<li>PR：进程优先级，越小越高</li>
<li>NI：负值表示高优先级，正值表示低优先级</li>
<li>VIRT：进程使用虚拟内存，单位KB。</li>
<li>RES：进程使用物理内存，单位KB。</li>
<li>SHR：进程使用共享内存，单位KB。</li>
<li>S：进程状态
<ul>
<li>S：休眠</li>
<li>R：运行</li>
<li>Z：僵死状态</li>
<li>N：负数优先级</li>
<li>I：空闲状态</li>
</ul>
</li>
<li>%CPU：进程占用CPU率</li>
<li>%MEM：进程占用内存率</li>
<li>TIME+：进程使用CPU时间总计，单位10毫秒。</li>
<li>COMMAND：进程的命令或名称或程序文件路径</li>
</ul>
<h3 id="top命令选项" tabindex="-1"><a class="header-anchor" href="#top命令选项"><span>top命令选项</span></a></h3>
<ul>
<li><code v-pre>-p</code>：只显示某个进程的信息</li>
<li><code v-pre>-d</code>：设置刷新时间，默认是5秒。</li>
<li><code v-pre>-c</code>：显示产生进程的完整命令，默认是进程名。</li>
<li><code v-pre>-n</code>：指定刷新次数，比如<code v-pre>top -n 3</code>表示刷新输出3次后退出。</li>
<li><code v-pre>-b</code>：以非交互非全屏模式运行，以批次的方式执行<code v-pre>top</code>，一般配合<code v-pre>-n</code>指定输出几次统计信息，将输出重新向到指定文件，比如<code v-pre>top -b -n 3 &gt; /tmp/top.tmp</code>。</li>
<li><code v-pre>-i</code>：不显示任何闲置(idle)或无用(zombie)的进程</li>
<li><code v-pre>-u</code>：查找特定用户启动的进程</li>
</ul>
<h3 id="top交互选项" tabindex="-1"><a class="header-anchor" href="#top交互选项"><span>top交互选项</span></a></h3>
<p>当<code v-pre>top</code>以交互式运行时，可以使用以下交互命令：</p>
<ul>
<li><code v-pre>h键</code>：显示帮助画面</li>
<li><code v-pre>c键</code>：显示产生进程的完整命令，等同于<code v-pre>-c</code>参数，再次按下时变为默认显示。</li>
<li><code v-pre>f键</code>：可以选择需要展示的项目</li>
<li><code v-pre>M键</code>：根据驻留内存大小(RES)排序</li>
<li><code v-pre>P键</code>：根据CPU使用百分比大小进行排序</li>
<li><code v-pre>T键</code>：根据时间/累计时间进行排序</li>
<li><code v-pre>E键</code>：切换顶部内存显示单位</li>
<li><code v-pre>e键</code>：切换进程内存显示单位</li>
<li><code v-pre>l键</code>：切换显示平均负载和启动时间信息</li>
<li><code v-pre>i键</code>：不显示闲置或无用的进程，等同于<code v-pre>-i</code>参数，再次按下变为默认显示。</li>
<li><code v-pre>t键</code>：切换显示CPU状态信息</li>
<li><code v-pre>m键</code>：切换显示内存信息</li>
</ul>
<h2 id="df命令-磁盘信息监控" tabindex="-1"><a class="header-anchor" href="#df命令-磁盘信息监控"><span>df命令:磁盘信息监控</span></a></h2>
<p>使用<code v-pre>df</code>命令可以查看硬盘的使用情况，语法：<br>
<code v-pre>df [-h]</code></p>
<ul>
<li><code v-pre>-h</code>：以更加人性化的单位显示</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ df -h</span>
<span class="line">Filesystem      Size  Used Avail Use% Mounted on</span>
<span class="line">/dev/sda3        38G  5.2G   33G  14% /</span>
<span class="line">devtmpfs        471M     0  471M   0% /dev</span>
<span class="line">tmpfs           487M     0  487M   0% /dev/shm</span>
<span class="line">tmpfs           487M  8.6M  478M   2% /run</span>
<span class="line">tmpfs           487M     0  487M   0% /sys/fs/cgroup</span>
<span class="line">/dev/sda1       297M  147M  151M  50% /boot</span>
<span class="line">tmpfs            98M   32K   98M   1% /run/user/1000</span>
<span class="line">tmpfs            98M     0   98M   0% /run/user/0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iostat命令-查看cpu、磁盘" tabindex="-1"><a class="header-anchor" href="#iostat命令-查看cpu、磁盘"><span>iostat命令:查看CPU、磁盘</span></a></h2>
<p>话不多说，语法如下：<br>
<code v-pre>iostat [-x] [num1] [num2]</code></p>
<ul>
<li><code v-pre>-x</code>：显示更多信息</li>
<li><code v-pre>num1</code>：填写数字，表示刷新间隔。</li>
<li><code v-pre>num2</code>：填写数字，表示刷新几次。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[miracles@192 ~]$ iostat -x</span>
<span class="line">Linux 3.10.0-957.el7.x86_64 (192.168.44.131) 	02/14/2025 	_x86_64_	(1 CPU)</span>
<span class="line"></span>
<span class="line">avg-cpu:  %user   %nice %system %iowait  %steal   %idle</span>
<span class="line">           0.54    0.11    1.05    0.06    0.00   98.23</span>
<span class="line"></span>
<span class="line">Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util</span>
<span class="line">sda               0.09     1.58    7.17    0.68   519.29    14.66   136.17     0.01    1.26    1.20    1.89   0.57   0.45</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">解释</p>
<ul>
<li><code v-pre>rrqm/s</code>：每秒这个设备相关的读取请求有多少被Merge了（当系统调用需要读取数据的时候，VFS将请求发到各个FS，如果FS发现不同的读取请求的是相同的Block的数据，FS会将这个请求合并Merge，提高IO利用率，避免重复调用）。</li>
<li><code v-pre> wrqm/s</code>：每秒这个设备相关的写入请求有多少被Merge了</li>
<li><code v-pre>r/s</code>：每秒读取的扇区数</li>
<li><code v-pre>w/s</code>：每秒写入的扇区数</li>
<li><code v-pre>rkB/s</code>：每秒发送到设备的读取请求数</li>
<li><code v-pre>wkB/s</code>：每秒发送到设备的写入请求数</li>
<li><code v-pre>avgrq-sz</code>：平均请求扇区的大小</li>
<li><code v-pre>avgqu-sz</code>：平均请求队列的长度</li>
<li><code v-pre>await</code>：每一个IO请求的处理的平均时间</li>
<li><code v-pre>svctm</code>：表示平均每次设备I/O操作的服务时间</li>
<li><code v-pre>%util</code>：磁盘利用率</li>
</ul>
</div>
<h2 id="sar命令-网络状态监控" tabindex="-1"><a class="header-anchor" href="#sar命令-网络状态监控"><span>sar命令:网络状态监控</span></a></h2>
<p>简单地使用<code v-pre>sar</code>命令查看网络地相关统计，语法：<br>
<code v-pre>sar -n DEV num1 num2</code></p>
<ul>
<li><code v-pre>-n</code>：查看网络</li>
<li><code v-pre>DEV</code>：表示查看网络接口</li>
<li><code v-pre>num1</code>：刷新间隔</li>
<li><code v-pre>num2</code>：查看次数</li>
</ul>
</div></template>


