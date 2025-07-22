export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								services
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155]">
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
							We build&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								robust&nbsp;
							</span>
							and&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								scalable&nbsp;
							</span>
							IT infrastructure that powers, protects and accelerates business growth.
						</p>
					</div>
					<div className="w-full flex border-t border-[#21212155] py-[20px] flex-col">
						<div className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]">
							<div className="w-[50%] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									We do this by following our <br /> proven methodology:
								</p>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]	">
								<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Requirements define everything
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											What are your business goals?
											<br className="sm:hidden xm:hidden" /> Understanding your
											specific needs and <br className="sm:hidden xm:hidden" />
											challenges allows us to design solutions
											<br className="sm:hidden xm:hidden" /> that perfectly fit
											and deliver results.
										</p>
									</div>
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Your business is the priority
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											What industry are you in? What are your
											<br className="sm:hidden xm:hidden" /> growth plans? We
											need to understand
											<br className="sm:hidden xm:hidden" /> your business well
											enough to build <br className="sm:hidden xm:hidden" />
											infrastructure that truly supports
											<br className="sm:hidden xm:hidden" />
											your success.
										</p>
									</div>
								</div>
								<div className="w-[50%] sm:w-full xm:w-full">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Environment makes a difference
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											On-premises or cloud? Hybrid setup?
											<br className="sm:hidden xm:hidden" />
											High availability requirements or standard?
											<br className="sm:hidden xm:hidden" /> We analyze your
											environment to design
											<br className="sm:hidden xm:hidden" /> the optimal
											architecture for your
											<br className="sm:hidden xm:hidden" /> specific needs.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
