const randomEmojis = [
     '😀', '😂', '😍', '😎', '😢', '😡', '😱', '👍', '👎', '👏', '🙌', '🙏', '💪', '🎉', '🔥', '🌟', '🌈', '🍕', '🍔', '🍣', '🍟', '🍩', '🍪', '🍫', '🍿', '🍭', '🍬', '🍮', '🍯', '🍎', '🍏', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑',
     '🍍', '🥥', '🥝', '🍅', '🥑', '🥦', '🥒', '🥬', '🥕', '🌽', '🥔', '🍠', '🥐', '🥖', '🥨', '🥯', '🥞', '🧇', '🧀', '🍖',
     '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🥙', '🧆', '🥚', '🍳', '🥘', '🍲', '🥣', '🥗', '🍿', '🧂',
     '🍤', '🍥', '🍡', '🍢', '🍧', '🍨', '🍦', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🍯', '🍎', '🍏', '🍊',
     '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥥', '🥝', '🍅', '🥑', '🥦', '🥒', '🥬', '🥕', '🌽', '🥔', '🍠',
     '🥐', '🥖', '🥨', '🥯', '🥞', '🧇', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🥙', '🧆',
     '🥚', '🍳', '🥘', '🍲', '🥣', '🥗', '🍿', '🧂', '🍤', '🍥', '🍡', '🍢', '🍧', '🍨', '🍦', '🍰', '🎂', '🍮', '🍭', '🍬',
     '🍫', '🍿', '🍩', '🍪', '🍯', '🍎', '🍏', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥥', '🥝', '🍅',
     '🥑', '🥦', '🥒', '🥬', '🥕', '🌽', '🥔', '🍠', '🥐', '🥖', '🥨', '🥯', '🥞', '🧇', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔',
     '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🥙', '🧆', '🥚', '🍳', '🥘', '🍲', '🥣', '🥗', '🍿', '🧂', '🍤', '🍥', '🍡', '🍢',
     '🥟', '🥠', '🥡', '🥢', '🥣', '🥤', '🥥', '🥦', '🥧', '🥨', '🥩', '🥪', '🥫', '🥬', '🥭', '🥮', '🥯', '🥰', '🥱', '🥲', 
     '🍧', '🍨', '🍦', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🍯', '🍎', '🍏', '🍊', '🍋', '🍌', '🍉', '🍇',
     '🍓', '🍈', '🍒', '🍑', '🍍', '🥥', '🥝', '🍅', '🥑', '🥦', '🥒', '🥬', '🥕', '🌽', '🥔', '🍠', '🥐', '🥖', '🥨', '🥯',
     '🥞', '🧇', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🥙', '🧆', '🥚', '🍳', '🥘', '🍲',
     '🥣', '🥗', '🍿', '🧂', '🍤', '🍥', '🍡', '🍢', '🥟', '🥠', '🥡', '🥢', '🥣', '🥤', '🥥', '🥦', '🥧', '🥨', '🥩', '🥪',
     '🥫', '🥬', '🥭', '🥮', '🥯', '🥰', '🥱', '🥲', '🥳', '🥴', '🥵', '🥶', '🥺', '🥻', '🥼', '🥽', '🥾', '🥿', '🦀', '🦁',
     '🦂', '🦃', '🦄', '🦅', '🦆', '🦇', '🦈', '🦉', '🦊', '🦋', '🦌', '🦍', '🦎', '🦏', '🦐', '🦑', '🦒', '🦓', '🦔', '🦕'
];


     

function gen() {
     emoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)] 
     display = document.getElementById("display")
     emoji1 = randomEmojis[Math.floor(Math.random() * randomEmojis.length)]
     display.textContent = emoji + emoji1
     let x = 0
     if ((emoji) == (emoji1)) {
      
          x=x+1
          document.getElementById("h2").textContent = "You Win" 
          console.log("You Win" )
          console.log(x)

          

         
     }     
     else{
          document.getElementById("h2").textContent = null
     }
     console.log("imoji index is :" + Math.floor(Math.random() * randomEmojis.length))
}



