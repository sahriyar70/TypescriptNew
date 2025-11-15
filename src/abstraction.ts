// oop --- abstraction 

// interface 
//  interface Midiaplayer {
//     play() : void ;
//     pause() : void ;
//     stop () : void;
//  }

//   class Musicplayer implements Midiaplayer {
//       play(): void {
//           console.log( " play ar rohman...");
          
//       }

//       pause(): void {
//           console.log("pause music..");
          
//       }

//       stop(): void {
//           console.log("stop play music...");
          
//       }
//   }

//   const myplayer = new Musicplayer()

//   myplayer.pause()
//   myplayer.play()
//   myplayer.stop()


// abstrac 

abstract class Midiaplayer {
  abstract  play() : void ;
  abstract  pause() : void ;
  abstract  stop () : void;
 }

  class Musicplayer extends Midiaplayer {
      play(): void {
          console.log( " play ar rohman...");
          
      }

      pause(): void {
          console.log("pause music..");
          
      }

      stop(): void {
          console.log("stop play music...");
          
      }
  }

  const myplayer = new Musicplayer()

  myplayer.pause()
  myplayer.stop()
  myplayer.play()