import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps= {
        pagesize:10,
        country: "in",
        category:'general',
    }
     PropTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string,
    }
  constructor(props){
    
    super(props);
    this.state={
      articles: this.articles,
      loading:false,
      page:1,
      totalresults:this.totalresults,
    };
  }
  articles=[
    {
        "source": {
            "id": null,
            "name": "Abplive.com"
        },
        "author": "ABP News Bureau",
        "title": "Vivo T3X India Launch Confirmed For April 17. Here's The Expected Price, Specifications, More - ABP Live",
        "description": "Handset maker Vivo has officially announced the arrival of the T3X, the latest addition to its T3 series of smartphones.",
        "url": "https://news.abplive.com/technology/gadgets/vivo-t3x-launch-india-april-17-specifications-features-price-colours-1678899",
        "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2024/04/10/2ca707323268bdee6112ff5e889f00a91712737170364295_original.png?impolicy=abp_cdn&imwidth=1200",
        "publishedAt": "2024-04-10T08:21:49Z",
        "content": "Handset maker Vivo has officially announced the arrival of the T3X, the latest addition to its T3 series of smartphones, boasting 5G capabilities. Scheduled for release in India on April 17, this dev… [+2022 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Sandip Chakraborty",
        "title": "Dell launches AI-powered Alienware m16 R2 and Inspiron 14 Plus laptops in India: Price, details, and more - Moneycontrol",
        "description": "The new laptops from Dell are targeted towards gamers and professionals and are powered by Intel Core Ultra processors.",
        "url": "https://www.moneycontrol.com/news/technology/dell-launches-ai-powered-alienware-m16-r2-and-inspiron-14-plus-laptops-in-india-price-details-and-more-12613781.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/04/Inspiron-14-Plus_5-770x433.jpg",
        "publishedAt": "2024-04-10T07:56:35Z",
        "content": "Dell has announced its latest consumer laptops in India with artificial intelligence (AI) capabilities and Intel Ultra Core processors. The Dell Alienware m16 R2 and Inspiron 14 Plus are targeted tow… [+1897 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Parmita Uniyal",
        "title": "Heatwave and heart attack: What's the connection? How to beat extreme heat and manage heart health - Hindustan Times",
        "description": "Heatwaves not only pose a direct risk to human health through heat-related illnesses but also exacerbate existing cardiovascular conditions. Here's what to do. | Health",
        "url": "https://www.hindustantimes.com/lifestyle/health/heatwave-and-heart-attack-whats-the-connection-how-to-beat-extreme-heat-and-manage-heart-health-101712734290577.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/04/10/1600x900/heart-attack_1712734389809_1712734389922.jpg",
        "publishedAt": "2024-04-10T07:37:57Z",
        "content": "Heatwave alerts have been issued for several states as the country braces for extended spell of extreme heat in the coming months. Scorching summer heat not only makes you sweat more, it also burdens… [+4731 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Ramdev Supreme Court Patanjali: \"We Are Not Blind\": Supreme Court Raps Ramdev Again, Rejects Apology - NDTV",
        "description": "Rejecting apologies filed by Patanjali founders Ramdev and Balkrishna for the company's misleading ads, the Supreme Court today said \"we are not blind\" and that \"it does not want to be generous\" in this case",
        "url": "https://www.ndtv.com/india-news/ramdev-supreme-court-patanjali-we-are-not-blind-supreme-court-raps-ramdev-again-rejects-apology-5411262",
        "urlToImage": "https://c.ndtvimg.com/2024-04/csgndupo_ramdev-ani-_625x300_10_April_24.jpg",
        "publishedAt": "2024-04-10T07:22:00Z",
        "content": "New Delhi: Rejecting another set of apologies filed by Patanjali founders Ramdev and Balkrishna for the company's misleading ads, the Supreme Court today said \"we are not blind\" and that \"it does not… [+4344 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Chess.com"
        },
        "author": "Anthony Levin",
        "title": "Nepomniachtchi Survives Praggnanandhaa's Killer Preparation, Gukesh Joins Lead - Chess.com",
        "description": "After almost six hours of play and in the longest round in the 2024 FIDE Candidates Tournament, GM Gukesh Dommaraju defeated GM Nijat Abasov to catch GM Ian Nepomniachtchi in the lead.",
        "url": "https://www.chess.com/news/view/2024-fide-candidates-tournament-round-5",
        "urlToImage": "https://images.chesscomfiles.com/uploads/v1/news/1372101.e296182b.5000x5000o.0baebc7550a9.png",
        "publishedAt": "2024-04-10T07:07:00Z",
        "content": "After close to six hours of play and in the longest round of the 2024 FIDE Candidates Tournament so far, GM Gukesh Dommaraju defeated GM Nijat Abasov to catch GM Ian Nepomniachtchi in the lead. Nepom… [+10652 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Firstpost"
        },
        "author": "Vibhuti Sanchala, Vibhuti Sanchala",
        "title": "India among nations with highest hepatitis B and C cases: What are these infections, how to prevent them? - Firstpost",
        "description": "India has the second-highest cases of hepatitis B and C after China, according to a WHO report. With 3.5 crore cases in 2022, the country accounted for 11.6 per cent of the disease burden worldwide. Both infections are caused by different viruses, spread in d…",
        "url": "https://www.firstpost.com/explainers/india-highest-hepatitis-b-and-c-infections-13758042.html",
        "urlToImage": "https://images.firstpost.com/uploads/2024/04/WhatsApp-Image-2024-04-10-at-12.28.24-PM-2024-04-48d3d2f6580213e8ed9797f023bdd71c.jpg?im=FitAndFill=(1200,675)",
        "publishedAt": "2024-04-10T06:42:52Z",
        "content": "Alarming trends of hepatitis viruses are seen globally, says WHO.\r\nAccording to a World Health Organization (WHO) report released to coincide with the World Hepatitis Summit in Portugal this week, In… [+6315 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Daijiworld.com"
        },
        "author": null,
        "title": "Fortune tellers in Karnataka predict Prime Minister Modi's third term - Daijiworld.com",
        "description": "Bengaluru, Apr 10 (IANS): Fortune tellers in Karnataka with a large following of people in Bagalkot and Dharwad districts, who predict the future on the auspicious day of Ugadi festival on Tuesday, have predicted that Prime Minister Narendra Modi will return …",
        "url": "https://www.daijiworld.com/news/newsDisplay?newsID=1182449",
        "urlToImage": "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/modi_100424_1.jpg",
        "publishedAt": "2024-04-10T06:13:23Z",
        "content": "Bengaluru, Apr 10 (IANS): Fortune tellers in Karnataka with a large following of people in Bagalkot and Dharwad districts, who predict the future on the auspicious day of Ugadi festival on Tuesday, h… [+1721 chars]"
    },
    {
        "source": {
            "id": "the-hindu",
            "name": "The Hindu"
        },
        "author": "The Hindu",
        "title": "Supreme Court lifts ₹4,700-cr. burden off DMRC, criticises its own 2021 verdict - The Hindu",
        "description": null,
        "url": "https://www.thehindu.com/news/cities/Delhi/supreme-court-lifts-4700-cr-burden-off-dmrc-criticises-its-own-2021-verdict/article68049360.ece",
        "urlToImage": null,
        "publishedAt": "2024-04-10T06:07:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Feroz Khan",
        "title": "'Ruturaj Gaikwad Has Taken Over From a God': Former England Captain Likens MS Dhoni's Presence With That of - News18",
        "description": "Chennai Super Kings are being led by Ruturaj Gaikwad in the ongoing IPL 2024 after MS Dhoni stepped aside ahead of the season.",
        "url": "https://www.news18.com/cricket/ruturaj-gaikwad-has-taken-over-from-a-god-former-england-captain-likens-ms-dhonis-presence-with-that-of-sir-alex-ferguson-8846187.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/04/ms-dhoni-ruturaj-gaiwkad-afp-2024-04-f95493da942b8076b6a740b5ad6018d2-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-04-10T05:47:37Z",
        "content": "Three seasons after playing under MS Dhoni, Ruturaj Gaikwad has been handed over one of the most challenging tasks to lead Chennai Super Kings in the IPL 2024. Under Dhoni, CSK became one of the most… [+1871 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Deepankar Malviya",
        "title": "Delhi court dismisses Kejriwal’s application seeking to increase legal meetings - Hindustan Times",
        "description": "The Delhi chief minister had filed an application before the court seeking to increase his legal meetings from twice a week to five times a week | Latest News Delhi",
        "url": "https://www.hindustantimes.com/cities/delhi-news/delhi-court-dismisses-kejriwal-s-application-seeking-to-increase-legal-meetings-101712728037114.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/04/10/1600x900/Special-judge-Kaveri-Baweja-dismissed-the-applicat_1712727992528.jpg",
        "publishedAt": "2024-04-10T05:47:16Z",
        "content": "A Delhi court on Wednesday dismissed the application moved by chief minister Arvind Kejriwal seeking to increase his legal meetings while he is in judicial custody in the money laundering case relate… [+2701 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Moneycontrol News",
        "title": "Peter Higgs, the father of God Particle, dies at 94: All about the Nobel laureate - Moneycontrol",
        "description": "Peter Higgs passed away peacefully at home on Monday 8 April following a short illness,&quot; the Scottish university, where he had been a professor for nearly five decades, said in a statement.",
        "url": "https://www.moneycontrol.com/news/photos/world/peter-higgs-the-father-of-god-particle-dies-at-94-all-about-the-nobel-laureate-12610801.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/04/Peter-Higgs-770x433.jpg",
        "publishedAt": "2024-04-10T05:22:40Z",
        "content": "British physicist Peter Higgs, whose theory of a mass-giving particle - the so-called Higgs boson - earned him the Nobel Prize for Physics, has died aged 94, the University of Edinburgh announced on … [+1579 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Karnataka 2nd PUC Result 2024 DECLARED: How to check Class 12 result at karresults.nic.in, other official website | Mint - Mint",
        "description": "Karnataka 2nd PUC Result 2024 DECLARED: Karnataka School Examination and Assessment Board announce Karnataka PUC 2 exam results with 81.15% pass percentage at karresults.nic.in.",
        "url": "https://www.livemint.com/education/news/karnataka-2nd-puc-result-2024-declared-kseab-class-12-official-link-pass-percentage-steps-to-download-karresultsnicin-11712725043409.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/04/10/1600x900/Exam_1655352915550_1712725904701.jpg",
        "publishedAt": "2024-04-10T05:10:40Z",
        "content": "Karnataka 2nd PUC Result 2024 DECLARED: The Karnataka School Examination and Assessment Board (KSEAB) has officially announced the results for the Karnataka PUC 2 examinations at karresults.nic.in. o… [+1997 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Nishant Kumar",
        "title": "Vedanta share price jumps 8%, hits 52-week high after CLSA upgrades the stock | Mint - Mint",
        "description": "Vedanta share price has been on an uptrend in the recent past. It has surged almost 33 per cent in April so far, following a little over 1 per cent gain in the previous month.",
        "url": "https://www.livemint.com/market/stock-market-news/vedanta-share-price-jumps-8-hits-52-week-high-after-clsa-upgrades-the-stock-11712724906190.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/04/10/1600x900/TCS_on_overseas_payments_for_investments_1695628348453_1712725010184.jpg",
        "publishedAt": "2024-04-10T05:02:07Z",
        "content": "Vedanta share price continued witnessing strong buying interest from investors as it jumped almost 8 per cent to hit its fresh 52-week high in morning trade on NSE on Wednesday, April 10. Vedanta sha… [+3578 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Apoorva Misra, Himani Chandna",
        "title": "Bird Flu Scare: Govt Checks Virus Strains Circulating in India, Poultry Lobby Finds No Unusual Trend - News18",
        "description": "Experts worldwide have raised a warning about the potential of a bird flu pandemic, which could be a hundred times more severe than Covid-19",
        "url": "https://www.news18.com/india/bird-flu-scare-govt-checks-virus-strains-circulating-in-india-poultry-lobby-finds-no-unusual-trend-8846406.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/04/bird-flu-2024-04-ee76360244b96bcfef9c809798645819-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-04-10T04:53:52Z",
        "content": "India has begun monitoring virus strains amid the looming scare of bird flu globally, especially in the United States. \r\nLast week, the Union government conducted an assessment of the prevailing flu … [+3403 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "India Today News Desk",
        "title": "BJP attacks Tejashwi Yadav for eating fish during Navratri, RJD leader reacts - India Today",
        "description": "Recently Tejashwi Yadav posted a video of him and Vikassheel Insaan Party VIP chief Mukesh Sahni having fish in a helicopter after campaigning",
        "url": "https://www.indiatoday.in/elections/lok-sabha/story/tejashwi-yadav-fish-video-navratri-mukesh-sahni-bjp-giriraj-singh-2525419-2024-04-10",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/tejashwi-yadav-103432749-16x9_0.jpg?VersionId=DbnlHn7ocJrQ3lh6dvGRQJQv3dMaDqsA",
        "publishedAt": "2024-04-10T04:49:02Z",
        "content": "Calling him an \"election sanatani\", the BJP has hit out at RJD leader Tejashwi Yadav for having fish during Navratri. The BJP's reaction came after Tejashwi Yadav posted a video of him and Vikassheel… [+1817 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "No India Interference In 2021 Polls Won By Trudeau: Canada Inquiry - NDTV",
        "description": "An official investigation into foreign interference allegations in Canadian elections has dismissed Indian meddling in Canadian politics.",
        "url": "https://www.ndtv.com/world-news/justin-trudeau-india-canada-row-canada-elections-no-india-interference-in-2021-polls-won-by-trudeau-canada-inquiry-5410649",
        "urlToImage": "https://c.ndtvimg.com/2023-10/mhrljs64_justin-trudeau-modi_625x300_23_October_23.jpg",
        "publishedAt": "2024-04-10T04:46:01Z",
        "content": "India had earlier refuted Canada's claims\r\nNew Delhi: An official investigation into the allegations of foreign meddling in Canada elections has concluded that India didn't try to interfere in the Ca… [+2017 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Apnnews.com"
        },
        "author": "APN News",
        "title": "Samsung Unveils Galaxy M55 5G, Galaxy M15 5G with Segment-Leading Super AMOLED Plus Display, Powerful Processor, and Stylish Design in India - APN News",
        "description": null,
        "url": "https://www.apnnews.com/samsung-unveils-galaxy-m55-5g-galaxy-m15-5g-with-segment-leading-super-amoled-plus-display-powerful-processor-and-stylish-design-in-india/",
        "urlToImage": null,
        "publishedAt": "2024-04-10T04:40:28Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT News Desk",
        "title": "Raj Thackeray says ‘was first to say Narendra Modi should be PM’; Congress takes 'lamb' jibe - Hindustan Times",
        "description": "Raj Thackeray said even when in Opposition, he didn't make “personal remarks” against PM Modi. | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/raj-thackeray-says-was-first-to-say-narendra-modi-should-be-pm-congress-takes-lamb-jibe-101712718911177.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/04/10/1600x900/ANI-20240409396-0_1712719418490_1712719445954.jpg",
        "publishedAt": "2024-04-10T04:30:15Z",
        "content": "Mumbai: After weeks of speculation and meetings with home minister Amit Shah, Maharashtra Navnirman Sena (MNS) chief Raj Thackeray finally announced on Tuesday that his party will extend \"uncondition… [+3285 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Aparna Deb",
        "title": "Stock Market Updates: Sensex Up 200 Points Higher, Nifty Above 22,650; Vedanta Rises 3% - News18",
        "description": "Nifty Metal, Nifty Realty, Nifty Auto, Nifty Oil and Gas and Nifty MidSmall Healthcare led sectoral gains on NSE.",
        "url": "https://www.news18.com/business/stock-market-updates-sensex-up-200-points-higher-nifty-above-22650-vedanta-rises-3-8846342.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/03/sensex-surges-over-550-points-nifty-tops-18000-on-easing-rate-hike-worries-all-eyes-on-tcs-earnings-2024-03-1d9c725416b80b4f761295ffded2d760-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-04-10T04:09:15Z",
        "content": "Market Today: Equity benchmark indices opened in green on Wednesday with the BSE Sensex rising 200 points to 74,909 and the NSE Nifty50 advancing by 50 points to 22,693.\r\nJSW Steel, Bharti Airtel, Ax… [+1290 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Joker: Folie à Deux trailer out! ‘Joaquin Phoenix is winning another Oscar..,’ Internet reacts | Mint - Mint",
        "description": "Trailer released for Joker: Folie à Deux, the musical sequel starring Joaquin Phoenix and Lady Gaga. Internet users express excitement and high expectations for the film.",
        "url": "https://www.livemint.com/news/trends/joker-2-audience-review-joaquin-phoenix-lady-gaga-harley-quinn-oscar-internet-reacts-over-trailer-hollywood-movies-11712720240690.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/04/10/1600x900/a_1712720374379_1712720378928.PNG",
        "publishedAt": "2024-04-10T04:03:15Z",
        "content": "The trailer for Joker: Folie à Deux, the musical follow-up to Joker featuring Academy Award winners Joaquin Phoenix and Lady Gaga, has been released. Watch the official trailer here:\r\n Meanwhile, the… [+2140 chars]"
    }]
 async componentDidMount(){
  var url;
    url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c00135166d9346a6a619b30a3a41d170&page=1&pagesize=${this.props.pagesize}`
    let data = await fetch(url);
    let ParsedData= await data.json()
    this.setState({articles: ParsedData.articles})
  } 

   handleonclickPrev = async()=>{
    window.scrollTo(0,0)
    console.log("prev"); 
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c00135166d9346a6a619b30a3a41d170&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
   this.setState({loading:true})
  let data = await fetch(url);
  let ParsedData= await data.json()
  /* console.log(ParsedData); */
  this.setState({loading:false})
  this.setState({articles: ParsedData.articles,
         page: this.state.page-1}) 
  } 
   handleonclickNext = async()=>{
    window.scrollTo(0,0)
     if(this.state.page+1 > Math.ceil(this.state.totalresults/10)){}
    else{ let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c00135166d9346a6a619b30a3a41d170&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let ParsedData= await data.json()
    /* console.log(ParsedData); */
    this.setState({loading:false})
    this.setState({articles: ParsedData.articles,
         page: this.state.page + 1}) }}
   
  
  render() {
    
    return (
        <>
        <div>
        <h1 className='d-flex justify-content-around'>Today News - Top Headlines - {this.props.category}</h1>
        {this.state.loading && <Spinner/>}
            <div className="d-flex justify-content-around">
                <button className="btn btn-dark me-md-2" type="button" disabled={this.state.page<=1} onClick={this.handleonclickPrev}>&larr; Prev</button>
                <button className="btn btn-dark" type="button"disabled={this.state.page>=this.state.totalresults/20} onClick={this.handleonclickNext}>Next &rarr;</button>
            </div>
        <div className="container my-3 text-center">
        <div className='row'>
          {this.state.articles.map((items) => {return <div key={items.url} className='col-md-4'>
             <NewsItem  title={items.title} mydesc={items.description} imgurl={items.urlToImage} newsurl={items.url}
             /> </div>
  }) }
            </div>
            </div>
            
            </div>
            <div className="d-flex justify-content-around">
                <button className="btn btn-dark me-md-2" type="button" disabled={this.state.page<=1} onClick={this.handleonclickPrev}>&larr; Prev</button>
                <button className="btn btn-dark" type="button"disabled={this.state.page>=this.state.totalresults/20} onClick={this.handleonclickNext}>Next &rarr;</button>
            </div>
        </>
    )
  }
}
