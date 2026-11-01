#!/usr/bin/env python3
"""Generate testimonials grid HTML for index.html (run manually when updating quotes)."""

def organiser(quote_html: str, name: str, title: str, initial: str, deprioritised=False):
    extra = " testimonial-card--deprioritised" if deprioritised else ""
    return f"""                <article class="testimonial-card testimonial-card--organiser{extra}">
                    <blockquote class="testimonial-quote"><p>{quote_html}</p></blockquote>
                    <footer class="testimonial-author">
                        <div class="testimonial-avatar" aria-hidden="true">{initial}</div>
                        <div class="testimonial-author-info">
                            <p class="author-name">{name}</p>
                            <p class="author-title">{title}</p>
                        </div>
                    </footer>
                </article>
"""

def attendee(quote_html: str, name: str, title: str, initial: str):
    return f"""                <article class="testimonial-card testimonial-card--attendee">
                    <blockquote class="testimonial-quote"><p>{quote_html}</p></blockquote>
                    <footer class="testimonial-author">
                        <div class="testimonial-avatar testimonial-avatar--attendee" aria-hidden="true">{initial}</div>
                        <div class="testimonial-author-info">
                            <p class="author-name">{name}</p>
                            <p class="author-title">{title}</p>
                        </div>
                    </footer>
                </article>
"""

BSLM = "British Society of Lifestyle Medicine Conference Attendee"
BSLM_DATE = "Sep 2026"

cards = [
    attendee(
        '<mark class="testimonial-highlight">One of the best presenters ever.</mark> Doing a talk to a teams wall is hard and <mark class="testimonial-highlight">he smashed it!!</mark> Would love to be able to book him for 1-1 personalised health advice',
        "Arup Attendee", "Sep 2026", "A",
    ),
    organiser(
        'We\'ve thoroughly enjoyed Dr Kurren\'s sessions. They have been <mark class="testimonial-highlight">extremely informative, engaging, and insightful</mark>. We particularly appreciate his style of delivery and always come away with <mark class="testimonial-highlight">valuable takeaways</mark>. <mark class="testimonial-highlight">We can\'t wait for our upcoming session with him later in the year.</mark>',
        "Olivia", "IMI Plc", "O",
    ),
    organiser(
        'Kurren was <mark class="testimonial-highlight">extremely professional and engaging throughout the session</mark>. Our members really enjoyed the experience, and the talk was both informative and well delivered. <mark class="testimonial-highlight">We would highly recommend his services</mark> to anyone looking for an engaging and professional afternoon! We\'d also love to welcome him back in the future as we continue with more onboardings.',
        "Karan", "Cubo", "K",
    ),
    attendee(
        'Wonderful! A <mark class="testimonial-highlight">really gifted communicator</mark> and big lesson about <mark class="testimonial-highlight">making things fun</mark>. Thank you.',
        "Arup Attendee", "Sep 2026", "A",
    ),
    organiser(
        'I\'d highly recommend working with Kurren and his spoken word. Kurren was lead performer for TEDxAstonUniversity. He was a <mark class="testimonial-highlight">delight to work with; professional, enthusiastic and diligent</mark>. He\'s engaged and quick to respond; excellent at tailoring his craft for his target audience whilst keeping his unique style. <mark class="testimonial-highlight">I look forward to working with him again!</mark>',
        "Noor", "TEDx Aston", "N",
    ),
    attendee(
        '<mark class="testimonial-highlight">Brilliant presentation by Dr Sandhu, really engaging, entertaining and informative</mark>',
        "Arup Attendee", "Sep 2026", "A",
    ),
    organiser(
        'Kurren was a fantastic guest speaker for an actuarial session I hosted. Despite the virtual setting, he <mark class="testimonial-highlight">brought energy, enthusiasm, and valuable insights</mark>. His adaptability and passion were evident, especially given the short notice and limited time slot for his presentation. <mark class="testimonial-highlight">It was great to present with him and look forward to collaborating again soon.</mark>',
        "Shivam Patel", "Aptuary", "S",
    ),
    attendee(
        'I thoroughly enjoyed your <mark class="testimonial-highlight">spoken word delivered at the BSLM conference</mark>. It\'s genuinely inspiring to see someone express themselves like that on stage, put themselves out there and <mark class="testimonial-highlight">invoke emotion into everyone in the crowd</mark>. Seriously inspiring!',
        BSLM, BSLM_DATE, "B",
    ),
    organiser(
        '<mark class="testimonial-highlight">Kurren\'s spoken word during our course filled us all with joy and reverence.</mark>',
        "Joe Hudson", "Art of Accomplishment", "J",
    ),
    attendee(
        '<mark class="testimonial-highlight">Hard hitting slides to remember</mark> are good e.g. waist half height, and images great such as hose pipe and pillars.',
        "Arup Attendee", "Sep 2026", "A",
    ),
    organiser(
        'Many congratulations on such an <mark class="testimonial-highlight">inspirational and beautifully nuanced inaugural talk.</mark>',
        "Nikolai", "The Curve", "N",
    ),
    attendee(
        '<mark class="testimonial-highlight">Loved your session at the BSLM</mark> – thank you for bringing a <mark class="testimonial-highlight">fresh dimension to the conference!</mark>',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">You did beautifully well.</mark> Subsequent sessions would be recommended as follow up.',
        "Arup Attendee", "Sep 2026", "A",
    ),
    attendee(
        '<mark class="testimonial-highlight">You were awesome. Not a dry eye….moved us all</mark> – thank you!',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">The creativity, openness and not just going through slides</mark>',
        "IMI Attendee", "May 2026", "I",
    ),
    attendee(
        'Thank you for your performance today. <mark class="testimonial-highlight">Genuinely very impressive and was the highlight of the conference for me</mark>',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        'Very enjoyable and informative. I feel <mark class="testimonial-highlight">really motivated to just make one change</mark>. I\'m going to go for a walk and explore different ways to make it into a habit.',
        "Arup Attendee", "Sep 2026", "A",
    ),
    attendee(
        '<mark class="testimonial-highlight">Your session was incredible. What great talent!!!</mark>',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        'A really enjoyable and interesting session that\'s given me a <mark class="testimonial-highlight">friendly kick up the bum which is very welcome</mark> 🙏🏼',
        "Arup Attendee", "Sep 2026", "A",
    ),
    attendee(
        'I was watching virtually so didn\'t get to be there in person but your session was <mark class="testimonial-highlight">amazing and epitomised everything that makes the BSLM conferences so different</mark> from all the others!',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        'I thought it was great. <mark class="testimonial-highlight">Well delivered, clear and enjoyable and more importantly educational.</mark>',
        "Arup Attendee", "Sep 2026", "A",
    ),
    organiser(
        'I did watch your session back – it was <mark class="testimonial-highlight">wonderful and so well received.</mark>',
        "Rachel Cox", "British Society of Lifestyle Medicine", "R",
    ),
    attendee(
        'Really enjoyable and informative session. A lot of <mark class="testimonial-highlight">good, practical information for life. Literally.</mark> Thank you!',
        "Arup Attendee", "Sep 2026", "A",
    ),
    attendee(
        'Thank you so much. I was <mark class="testimonial-highlight">moved to tears</mark>. You are talented but also brought the most incredible atmosphere and peace. I\'d definitely come and see you perform again.',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        'Loved the presentation Dr Kurren – <mark class="testimonial-highlight">would have liked it to last longer :)</mark>',
        "Arup Attendee", "Sep 2026", "A",
    ),
    attendee(
        '<mark class="testimonial-highlight">What a full-circle moment!</mark> It was brilliant to have you share your work, your story and your talent with our community at BSLM 2026. We\'re excited to see what comes next!',
        "British Society of Lifestyle Medicine", "Event Organiser · Sep 2026", "B",
    ),
    attendee(
        'Fantastic, informative and enjoyable. <mark class="testimonial-highlight">Thank you for the spoken word!</mark>',
        "Arup Attendee", "Sep 2026", "A",
    ),
    attendee(
        'Very grateful that your experience, curiosity &amp; learning brought you to lifestyle medicine. <mark class="testimonial-highlight">What a great addition to our programme!</mark> Thank you (both) for joining us – I loved this session 🎤',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">Understanding the 6 pillars</mark> and the general conversation about mental health',
        "IMI Attendee", "May 2026", "I",
    ),
    attendee(
        'It was an honour to meet you and that was such an <mark class="testimonial-highlight">impactful session to end the day on such a high of gratitude</mark>. Keep it up and look forward to more from you.',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">Very relaxed and informative</mark>',
        "IMI Attendee", "May 2026", "I",
    ),
    attendee(
        'I saw your performance! <mark class="testimonial-highlight">It was great, congrats!</mark>',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        'How <mark class="testimonial-highlight">easily digestible the information</mark> provided was and in an <mark class="testimonial-highlight">engaging way</mark>',
        "IMI Attendee", "Jun 2026", "I",
    ),
    attendee(
        'It was a <mark class="testimonial-highlight">wonderful performance. Thank you so much.</mark>',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">Clearly, patiently explained.</mark>',
        "IMI Attendee", "Jun 2026", "I",
    ),
    attendee(
        'You were excellent! Thank you so much. <mark class="testimonial-highlight">Many people have mentioned how much they enjoyed your time.</mark> Thanks!',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">Simple structure and easy to follow</mark>',
        "IMI Attendee", "Jun 2026", "I",
    ),
    attendee(
        'Your session was amazing ☺️ <mark class="testimonial-highlight">keep shining brightly</mark> 😊🌟',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">Good stories and examples</mark>',
        "IMI Attendee", "Jun 2026", "I",
    ),
    attendee(
        'It was so <mark class="testimonial-highlight">uplifting to end the day with that bit of relaxation and gratitude</mark>',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">Honesty, factual, clear and concise</mark> – covering all the main topics',
        "IMI Attendee", "Jun 2026", "I",
    ),
    attendee(
        'Really enjoyed this!! <mark class="testimonial-highlight">You were brilliant</mark>',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">Interactive.</mark> Key points raised without too much jargon and science information',
        "IMI Attendee", "Jun 2026", "I",
    ),
    attendee(
        'It was exactly what I needed. Thank you 🙏 <mark class="testimonial-highlight">real talent</mark>',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">Really informative, clear and also a bit of fun</mark>',
        "IMI Attendee", "Jun 2026", "I",
    ),
    attendee(
        'It was so refreshing thank you 🙏',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">Fantastic session.</mark> Real examples, explained in terms we all understand, with solutions. Thank you!',
        "IMI Attendee", "Oct 2026", "I",
    ),
    attendee(
        'Keep up the good work and I\'ll definitely be <mark class="testimonial-highlight">sharing your story with mates and colleagues</mark>',
        BSLM, BSLM_DATE, "B",
    ),
    attendee(
        '<mark class="testimonial-highlight">Interaction blended with personal experience, very well delivered.</mark>',
        "IMI Attendee", "Oct 2026", "I",
    ),
    attendee(
        'I managed to catch a portion of the call myself and it had <mark class="testimonial-highlight">great attendance and was insightful</mark> for what I observed anyways.',
        "Arup Attendee", "Sep 2026", "A",
    ),
    organiser(
        'Kurren\'s mastery of the spoken word has been shown throughout his time as a trainee doctor. He most successfully demonstrated this in his spoken word poetry in a Dragon\'s Den event, <mark class="testimonial-highlight">mesmerizing the audience with his cadence and flow</mark>. The reflection by the audience after he finished can only be thought as <mark class="testimonial-highlight">overwhelmingly positive</mark>. Don\'t miss out on hearing Kurren yourself!',
        "Atif Hassan", "BSol West Birmingham VTS Training Programme Director", "A", deprioritised=True,
    ),
    organiser(
        '<mark class="testimonial-highlight">Inspiring and motivational</mark> in helping people to reach a <mark class="testimonial-highlight">healthier work life balance</mark> and to recognise their spiritual journey by listening to that inner voice.',
        "Linda", "The Curve", "L", deprioritised=True,
    ),
    organiser(
        '<mark class="testimonial-highlight">Your work is amazing! We are really pleased with it. Well done!</mark>',
        "Beatfreeks", "Beatfreeks", "B", deprioritised=True,
    ),
]

if __name__ == "__main__":
    from pathlib import Path
    out = Path(__file__).resolve().parent.parent / "_testimonials_grid.html"
    out.write_text("\n".join(cards) + "\n")
    print(f"Wrote {len(cards)} cards to {out}")
